import json

with open('acf-parche-internas.json', 'r') as f:
    acf_data = json.load(f)

for group in acf_data:
    if group['key'] == 'group_procedimiento_cpt':
        # Create repeater for Tipos de Tratamiento
        tipos_tratamiento = {
            "key": "field_tipos_tratamiento",
            "label": "Tipos de Tratamiento",
            "name": "tipos_de_tratamiento",
            "type": "repeater",
            "layout": "block",
            "button_label": "A\u00f1adir Tipo de Tratamiento",
            "sub_fields": [
                {
                    "key": "field_tipo_nombre",
                    "label": "Nombre del Tratamiento",
                    "name": "nombre_del_tipo",
                    "type": "text",
                    "required": 1
                },
                {
                    "key": "field_tipo_contenido",
                    "label": "Contenido del Tratamiento",
                    "name": "contenido",
                    "type": "wysiwyg",
                    "tabs": "all",
                    "toolbar": "full",
                    "media_upload": 1
                }
            ],
            "conditional_logic": [
                [
                    {
                        "field": "field_tipo_plantilla",
                        "operator": "==",
                        "value": "tratamiento"
                    }
                ]
            ]
        }
        
        group['fields'].append(tipos_tratamiento)

with open('acf-parche-tratamientos.json', 'w') as f:
    json.dump(acf_data, f, indent=4)
