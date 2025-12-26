type AnyObject = Record<string, any>;
type ArrayWithId = ({ id?: string | number } & AnyObject)[];
interface MergeArrayConfig {
  // TODO: переделать на использование массива идентификаторов
  id: string; //id - идентификатор уникальности
}

export type TCurveShape = 'linear' | 'fillCeil' | 'fillFloor' | 'dots' | 'between' | 'joinedDots';

interface User {
  id?: number;
  name: string;
  profile?: {
    age: number;
    hobbies: { id?: number; name: string }[];
  };
  tags: string[];
}

interface TConfigTrack {
  order?: number;
  startPos?: number;
  name: string;
  caption?: string;
  zeroLine?: boolean;
  isRealTime?: boolean;
  hiddenName?: boolean;
  width: number;
  gridIndexAxisCols?: number;
  gridValueAxisCols?: number;
  uomGroup?: TUnitGroup[];
  channels?: ISingleChannel[];

  hidden?: boolean;
  disablePrinting?: boolean;

  isLegendVisible?: boolean;
  tickSizes?: number[];
}

export interface TUnitGroup {
  caption?: string;
  uom: string;
  autoScale: boolean;
  min?: number;
  max?: number;
  channels: ISingleChannel[];

  hideScale?: boolean;
  indexColors?: [number, string][];
  indexLines?: [number, number][];
  indexFills?: [number, string][];
  lineStyles?: VariantLineStyle[];
}

export interface ISingleChannel {
  id?: string;
  entityName: string;
  displayName?: string;
  multi: boolean;
  objectId: string;
  indexCol: string;
  valueCol: string;
  variantCol?: string;
  autoScale: boolean;
  hiddenScale?: boolean;
  min?: number;
  max?: number;
  exParticipating?: boolean;
  expand?: string[];
  color?: string;
  joinColor?: string;
  line?: string;

  pointSize?: number;
  lineWidth?: number;
  joinWidth?: number;
  fillType?: TCurveShape;
  fillColor?: string;

  noHeader?: boolean;
  decode?: Record<string, number>;
  between?: string;
  isBetweenVariant?: boolean;
  betweenCurve?: string;
  isVisibleWhenNoData?: false;
  dataMin?: number;
  dataMax?: number;

}

export interface VariantLineStyle {
  index: number[];
  color: string;
  styleNum: number;
  fillBetween?: number[];
  fill: string;
  fillType: TCurveShape;
}


interface TConfigObject {
  objectId?: string;
  fromUrl?: boolean;
  disableSettings?: boolean;
  nullObjectIdDisable?: boolean;
  objectIdValue?: string;
  objectType?: string;
  caseName?: string;

  headersBorderColor?: string;
  minScaleSize?: number;
  tracks: TConfigTrack[];

  trackGap?: number;
  frozenCount?: number;

  ignoreSchematicSize: boolean;
  isBeforeCurrentTime?: boolean;
}

function deepMergeWithId<T extends AnyObject>(target: T, source: T, conf: MergeArrayConfig): T {
  if (typeof target !== 'object' || target === null || typeof source !== 'object' || source === null) {
    return source;
  }

  const result: AnyObject = Array.isArray(target) ? [...target] : { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetValue = target[key];
      const sourceValue = source[key];

      // Обработка массивов с объектами, содержащими id
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        const targetArray = targetValue as ArrayWithId;
        const sourceArray = sourceValue as ArrayWithId;

        result[key] = mergeArraysById(targetArray, sourceArray, conf);
      }
      // Рекурсивное объединение объектов
      else if (
        typeof targetValue === 'object' &&
        targetValue !== null &&
        typeof sourceValue === 'object' &&
        sourceValue !== null &&
        !Array.isArray(targetValue) &&
        !Array.isArray(sourceValue)
      ) {
        result[key] = deepMergeWithId(targetValue, sourceValue, conf);
      }
      // Простая замена для примитивов и массивов без id
      else {
        result[key] = sourceValue;
      }
    }
  }

  return result as T;
}

function mergeArraysById(target: ArrayWithId, source: ArrayWithId, config: MergeArrayConfig): ArrayWithId {
  const result = [...target];

  for (const sourceItem of source) {
    // Если у элемента есть id, ищем совпадение в целевом массиве
    if (sourceItem[config.id] !== undefined) {
      const existingIndex = result.findIndex((item) => item[config.id] !== undefined && item[config.id] === sourceItem[config.id]);

      if (existingIndex !== -1) {
        // Рекурсивно объединяем найденный объект
        result[existingIndex] = deepMergeWithId(result[existingIndex], sourceItem, config);
      } else {
        // Добавляем новый элемент
        result.push(sourceItem);
      }
    } else {
      // Если нет id, просто добавляем элемент
      result.push(sourceItem);
    }
  }

  return result;
}

function test1() {
  const target: User = {
    id: 1,
    name: 'John',
    profile: {
      age: 30,
      hobbies: [
        { id: 1, name: 'Reading' },
        { id: 2, name: 'Swimming' }
      ]
    },
    tags: ['active', 'user']
  };

  const source: User = {
    name: 'John Doe',
    profile: {
      age: 31,
      hobbies: [
        { id: 1, name: 'Reading Books' }, // Обновится существующий
        { id: 3, name: 'Cooking' } // Добавится новый
      ]
    },
    tags: ['premium'] // Простая замена, так как нет id
  };

  const merged = deepMergeWithId(target, source, { id: 'id' });
  console.log(JSON.stringify(merged));
}

function test2() {
  const track1: TConfigTrack = {
    "name": "Temperature",
    "width": 95,
    "uomGroup": [
      {
        "autoScale": true,
        "uom": "",
        "channels": [
          {
            "entityName": "WellborePoints",
            "multi": false,
            "displayName": "Annulus",
            "objectId": "",
            "indexCol": "MD",
            "valueCol": "Temperature",
            "color": "#ff0000",
            "line": "4 2 2 2 6 2 2 2 4 2",
            "lineWidth": 2,
            "variantCol": "VariantId",
            "min": 18,
            "max": 26,
            "autoScale": false,
            "id": "WellborePointsTemperature"
          },
          {
            "entityName": "DrillstringPoints",
            "multi": false,
            "displayName": "Drill String",
            "objectId": "",
            "indexCol": "MD",
            "valueCol": "Temperature",
            "color": "#0000ff",
            "line": "0",
            "lineWidth": 2,
            "variantCol": "VariantId",
            "min": 18,
            "max": 26,
            "autoScale": false,
            "id": "DrillstringPointsTemperature"
          }
        ]
      }
    ],
    "order": 5,
    "startPos": 611
  }

  const track2: TConfigTrack = {
    "name": "Angle",

    "width": 90,
    "caption": "Angles",
    "uomGroup": [
      {
        "autoScale": true,
        "min": 0,
        "max": 90,
        "uom": "",
        "caption": "Angles",
        "channels": [
          {
            "entityName": "WellborePoints",
            "displayName": "Inclination",
            "objectId": "",
            "indexCol": "MD",
            "valueCol": "Inclination",
            "autoScale": false,
            "color": "#001aff",
            "line": "12 4",
            "lineWidth": 2,
            "fillType": "linear",
            "pointSize": 3,
            "variantCol": "VariantId",
            "exParticipating": false,
            "min": 0,
            "max": 5,
            "id": "WellborePointsInclination",
            multi: false
          }
        ]
      }
    ],
    "order": 2,
    "startPos": 222
  }

  const track3: TConfigTrack = { ...track1, name: 'Some New track' }

  const fConfig: TConfigObject = {
    tracks: [track1, track2],
    ignoreSchematicSize: true
  }

  const sConfig: TConfigObject = {
    tracks: [track3, track1],
    ignoreSchematicSize: false,
    caseName: 'ogin gogin',
    fromUrl: false
  }

  const merged = deepMergeWithId(fConfig, sConfig, { id: 'name' });
  console.log(JSON.stringify(merged));
}

test1()
console.log('--------');
test2();