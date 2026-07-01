import json

with open('/Users/user/Documents/Mendoza/MendozaPlasticSurgey/acf-parche-seguro.json', 'r') as f:
    data = json.load(f)

# Find the group_procedimiento_cpt
for group in data:
    if group.get('key') == 'group_procedimiento_cpt':
        # Add Casos Relacionados
        group['fields'].append({
            "key": "field_cpt_casos_relacionados",
            "label": "Casos Relacionados",
            "name": "casos_relacionados",
            "type": "relationship",
            "instructions": "Selecciona los casos clínicos que deseas mostrar en el slider de Antes y Después.",
            "required": 0,
            "post_type": ["caso"],
            "taxonomy": "",
            "filters": ["search", "post_type"],
            "elements": "",
            "min": "",
            "max": "",
            "return_format": "object"
        })
        
        # Add FAQs
        group['fields'].append({
            "key": "field_cpt_faqs",
            "label": "Preguntas Frecuentes (FAQ)",
            "name": "faqs",
            "type": "repeater",
            "instructions": "Añade las preguntas y respuestas frecuentes para este procedimiento.",
            "required": 0,
            "layout": "block",
            "button_label": "Añadir Pregunta",
            "sub_fields": [
                {
                    "key": "field_cpt_faq_pregunta",
                    "label": "Pregunta",
                    "name": "pregunta",
                    "type": "text",
                    "required": 1
                },
                {
                    "key": "field_cpt_faq_respuesta",
                    "label": "Respuesta",
                    "name": "respuesta",
                    "type": "textarea",
                    "required": 1,
                    "rows": 4,
                    "new_lines": "wpautop"
                }
            ]
        })

with open('/Users/user/Documents/Mendoza/MendozaPlasticSurgey/acf-parche-internas.json', 'w') as f:
    json.dump(data, f, indent=4)

print("Patch generated successfully: acf-parche-internas.json")
