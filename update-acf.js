const fs = require('fs');

const path = './acf-export-completo.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Find the group "group_procedimientos_page"
const group = data.find(g => g.key === 'group_procedimientos_page');
if (group) {
  // Find "tabs_lista"
  const tabsList = group.fields.find(f => f.key === 'field_proc_tabs_lista');
  if (tabsList) {
    // Check if sub-field already exists
    const exists = tabsList.sub_fields.some(sf => sf.key === 'field_ptab_procedimientos');
    if (!exists) {
      tabsList.sub_fields.push({
        "key": "field_ptab_procedimientos",
        "label": "Procedimientos Asociados",
        "name": "procedimientos_relacionados",
        "type": "relationship",
        "post_type": ["procedimiento"],
        "taxonomy": "",
        "filters": ["search"],
        "elements": ["featured_image"],
        "min": "",
        "max": "",
        "return_format": "object"
      });
      fs.writeFileSync(path, JSON.stringify(data, null, 2));
      console.log('Successfully added procedimientos_relacionados field!');
    } else {
      console.log('Field already exists.');
    }
  }
}
