const data = {
  'd280cf1b-5bba-45c6-a267-873043e33ac1': {
    '55772bfd-fea8-40fb-930c-bad223bf5a99': [
      { time: '2021-10-26T16:58:57.914Z', value: null },
      { time: '2021-10-26T17:08:18.673Z', value: null },
      { time: '2021-10-26T17:18:19.010Z', value: null },
      { time: '2021-10-26T17:28:19.303Z', value: 0 },
    ],
  },
}

console.log(
  Object.keys(data)
    .map((f) => data[f][Object.keys(data[f])])
    .flat()
    .map((l) => l.value)
    .every((v) => v === null)
)
