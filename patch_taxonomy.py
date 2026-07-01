import json

taxonomy_patch = [
    {
        "key": "taxonomy_categoria_procedimiento",
        "title": "Categorías de Procedimientos",
        "menu_order": 0,
        "active": True,
        "taxonomy": "categoria_procedimiento",
        "post_types": [
            "procedimiento"
        ],
        "advanced_configuration": False,
        "import_source": "",
        "import_date": "",
        "allow_ai_access": False,
        "ai_description": "",
        "labels": {
            "name": "Categorías de Procedimientos",
            "singular_name": "Categoría de Procedimiento",
            "menu_name": "Categorías",
            "all_items": "Todas las Categorías",
            "edit_item": "Editar Categoría",
            "view_item": "Ver Categoría",
            "update_item": "Actualizar Categoría",
            "add_new_item": "Añadir Nueva Categoría",
            "new_item_name": "Nuevo Nombre de Categoría",
            "search_items": "Buscar Categorías",
            "popular_items": "Categorías Populares",
            "separate_items_with_commas": "Separar categorías con comas",
            "add_or_remove_items": "Añadir o eliminar categorías",
            "choose_from_most_used": "Elegir entre las más usadas",
            "not_found": "No se encontraron categorías",
            "no_terms": "No hay categorías",
            "items_list_navigation": "Navegación de la lista de categorías",
            "items_list": "Lista de categorías",
            "back_to_items": "← Ir a categorías"
        },
        "description": "",
        "public": True,
        "publicly_queryable": True,
        "hierarchical": True,
        "show_ui": True,
        "show_in_menu": True,
        "show_in_nav_menus": True,
        "show_admin_column": True,
        "show_in_rest": True,
        "rest_base": "",
        "rest_namespace": "wp/v2",
        "rest_controller_class": "WP_REST_Terms_Controller",
        "rewrite": {
            "permalink_structure": True,
            "slug": "categoria-procedimiento",
            "with_front": True,
            "hierarchical": False
        },
        "capabilities": {
            "manage_terms": "manage_categories",
            "edit_terms": "manage_categories",
            "delete_terms": "manage_categories",
            "assign_terms": "edit_posts"
        },
        "sort": None,
        "meta_box": "custom",
        "meta_box_custom": "categoria_procedimiento"
    }
]

with open('/Users/user/Documents/Mendoza/MendozaPlasticSurgey/acf-taxonomy-patch.json', 'w') as f:
    json.dump(taxonomy_patch, f, indent=4)

print("Taxonomy Patch JSON created successfully.")
