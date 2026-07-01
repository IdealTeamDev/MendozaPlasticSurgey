import json

with open('acf-parche-tratamientos.json', 'r') as f:
    acf_data = json.load(f)

cirugia_logic = [
    [
        {
            "field": "field_tipo_plantilla",
            "operator": "==",
            "value": "cirugia"
        }
    ]
]

for group in acf_data:
    if group['key'] == 'group_procedimiento_cpt':
        for field in group['fields']:
            if field.get('name') in ['quick_facts', 'casos_relacionados', 'faqs']:
                field['conditional_logic'] = cirugia_logic

with open('acf-parche-final.json', 'w') as f:
    json.dump(acf_data, f, indent=4)
