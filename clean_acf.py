import json

with open('/Users/user/Documents/Mendoza/Assets/export-actual.json', 'r') as f:
    data = json.load(f)

# The keys we want to REMOVE because they are old/duplicates
keys_to_remove = ["group_inicio_page", "group_blog_page"]
cleaned_data = []

for item in data:
    if item.get("key") in keys_to_remove:
        continue
    
    # 1. Add "tipo_de_plantilla" to group_procedimiento_cpt if not exists
    if item.get("key") == "group_procedimiento_cpt":
        fields = item.get("fields", [])
        has_tipo = any(f.get("key") == "field_cpt_tipo_plantilla" for f in fields)
        if not has_tipo:
            fields.insert(0, {
                "key": "field_cpt_tipo_plantilla",
                "label": "Tipo de Plantilla",
                "name": "tipo_de_plantilla",
                "type": "select",
                "instructions": "Elige el diseño de página que se mostrará para este post.",
                "required": 0,
                "choices": {
                    "cirugia": "Cirugía (Opción 1)",
                    "tratamiento": "Tratamiento (Opción 2)"
                },
                "default_value": "cirugia",
                "return_format": "value"
            })
            item["fields"] = fields

    # 2. Add "procedimientos_relacionados" to group_procedimientos_page if not exists
    if item.get("key") == "group_procedimientos_page":
        # Make sure it only targets page 54 (Procedimientos)
        item["location"] = [[{"param": "page", "operator": "==", "value": "54"}]]
        
        fields = item.get("fields", [])
        for f in fields:
            if f.get("key") == "field_proc_tabs_lista":
                sub_fields = f.get("sub_fields", [])
                has_rel = any(sf.get("key") == "field_ptab_procedimientos" for sf in sub_fields)
                if not has_rel:
                    sub_fields.append({
                        "key": "field_ptab_procedimientos",
                        "label": "Procedimientos Asociados",
                        "name": "procedimientos_relacionados",
                        "type": "relationship",
                        "post_type": ["procedimiento"],
                        "filters": ["search"],
                        "elements": ["featured_image"],
                        "return_format": "object",
                        "parent_repeater": "field_proc_tabs_lista"
                    })
                f["sub_fields"] = sub_fields

    cleaned_data.append(item)

with open('/Users/user/Documents/Mendoza/MendozaPlasticSurgey/acf-limpio-final.json', 'w') as f:
    json.dump(cleaned_data, f, indent=4)

print("Cleaned JSON created successfully.")
