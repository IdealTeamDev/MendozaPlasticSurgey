import json
import uuid

group_key = "group_casos_clinicos"

acf_group = {
    "key": group_key,
    "title": "Campos: Casos Cl\u00ednicos",
    "fields": [
        {
            "key": "field_galeria_casos",
            "label": "Ejemplos (Galería de Antes y Después)",
            "name": "galeria_casos",
            "type": "repeater",
            "layout": "block",
            "button_label": "Añadir Ejemplo",
            "sub_fields": [
                {
                    "key": "field_galeria_foto_antes",
                    "label": "Foto Antes",
                    "name": "foto_antes",
                    "type": "image",
                    "return_format": "url",
                    "preview_size": "medium",
                    "library": "all"
                },
                {
                    "key": "field_galeria_foto_despues",
                    "label": "Foto Después",
                    "name": "foto_despues",
                    "type": "image",
                    "return_format": "url",
                    "preview_size": "medium",
                    "library": "all"
                }
            ]
        }
    ],
    "location": [
        [
            {
                "param": "post_type",
                "operator": "==",
                "value": "caso"
            }
        ]
    ],
    "menu_order": 0,
    "position": "normal",
    "style": "default",
    "label_placement": "top",
    "instruction_placement": "label",
    "hide_on_screen": "",
    "active": True,
    "description": "",
    "show_in_rest": 1
}

output = [acf_group]

with open("acf-parche-casos.json", "w") as f:
    json.dump(output, f, indent=4)
