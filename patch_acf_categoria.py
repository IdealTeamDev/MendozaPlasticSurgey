import json

acf_group = {
    "key": "group_categoria_procedimiento",
    "title": "Campos: Categor\u00eda de Procedimiento",
    "fields": [
        {
            "key": "field_imagen_categoria",
            "label": "Imagen de Categor\u00eda",
            "name": "imagen_categoria",
            "type": "image",
            "instructions": "Sube una imagen miniatura para esta categor\u00eda (se usar\u00e1 en el acorde\u00f3n de Antes y Despu\u00e9s).",
            "required": 0,
            "return_format": "url",
            "preview_size": "thumbnail",
            "library": "all"
        }
    ],
    "location": [
        [
            {
                "param": "taxonomy",
                "operator": "==",
                "value": "categoria_procedimiento"
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

with open("acf-parche-categoria.json", "w") as f:
    json.dump([acf_group], f, indent=4)
