src = [{"text": "55", "id": 10}, {
    "text": "0056", "id": 11}, {"text": "559", "id": 12}, ]

dest = map(lambda x: x["id"], src)

for it in dest:
    print(it)

# ids_list = list(map(lambda row: row.find_element(By.CSS_SELECTOR, ".slick-cell:nth-child(2)").text,
 #                   self.driver.find_elements(By.CSS_SELECTOR, ".ui-widget-content.slick-row")))
