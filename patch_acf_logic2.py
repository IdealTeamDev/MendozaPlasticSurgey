import json

with open('acf-parche-final.json', 'r') as f:
    acf_data = json.load(f)

for group in acf_data:
    if group['key'] == 'group_procedimiento_cpt':
        for field in group['fields']:
            # Fix conditional logic if it exists
            if field.get('conditional_logic'):
                for group_logic in field['conditional_logic']:
                    for rule in group_logic:
                        if rule.get('field') == 'field_tipo_plantilla':
                            rule['field'] = 'field_cpt_tipo_plantilla'

with open('acf-parche-final2.json', 'w') as f:
    json.dump(acf_data, f, indent=4)
