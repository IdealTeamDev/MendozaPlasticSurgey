const fs = require('fs');

const generateKey = (name) => `field_${name}`;

const inicioGroup = {
  key: 'group_inicio_page',
  title: 'Página: Inicio',
  fields: [
    {
      key: generateKey('hero_tab'),
      label: 'Sección: Hero',
      name: '',
      type: 'tab',
      placement: 'top',
    },
    { key: generateKey('hero_subtitulo'), label: 'Hero Subtítulo', name: 'hero_subtitulo', type: 'text' },
    { key: generateKey('hero_titulo'), label: 'Hero Título', name: 'hero_titulo', type: 'text' },
    { key: generateKey('hero_texto'), label: 'Hero Texto', name: 'texto_hero', type: 'textarea' },
    { key: generateKey('hero_imagen'), label: 'Hero Imagen', name: 'hero_imagen', type: 'image', return_format: 'url' },
    
    {
      key: generateKey('about_tab'),
      label: 'Sección: Sobre Nosotros',
      name: '',
      type: 'tab',
    },
    { key: generateKey('about_subtitulo'), label: 'About Subtítulo', name: 'about_subtitulo', type: 'text' },
    { key: generateKey('about_titulo'), label: 'About Título', name: 'about_titulo', type: 'text' },
    { key: generateKey('about_texto'), label: 'About Texto', name: 'about_texto', type: 'wysiwyg' },
    { key: generateKey('about_imagen'), label: 'About Imagen', name: 'about_imagen', type: 'image', return_format: 'url' },
    
    {
      key: generateKey('badges_tab'),
      label: 'Sección: Insignias',
      name: '',
      type: 'tab',
    },
    {
      key: generateKey('badges_list'),
      label: 'Lista de Insignias',
      name: 'badges_list',
      type: 'repeater',
      layout: 'table',
      sub_fields: [
        { key: generateKey('badge_insignia'), label: 'Insignia (Imagen)', name: 'insignia', type: 'image', return_format: 'url' }
      ]
    },

    {
      key: generateKey('procedimientos_tab'),
      label: 'Sección: Procedimientos',
      name: '',
      type: 'tab',
    },
    { key: generateKey('procedimientos_titulo'), label: 'Título Procedimientos', name: 'procedimientos_titulo', type: 'text' },
    {
      key: generateKey('procedimientos_lista'),
      label: 'Lista de Procedimientos',
      name: 'procedimientos_lista',
      type: 'repeater',
      layout: 'row',
      sub_fields: [
        { key: generateKey('proc_titulo_pestana'), label: 'Título de Pestaña', name: 'titulo_pestana', type: 'text' },
        { key: generateKey('proc_descripcion'), label: 'Descripción', name: 'descripcion', type: 'textarea' },
        { key: generateKey('proc_imagen'), label: 'Imagen', name: 'imagen', type: 'image', return_format: 'url' }
      ]
    },

    {
      key: generateKey('financiamiento_tab'),
      label: 'Sección: Financiamiento',
      name: '',
      type: 'tab',
    },
    { key: generateKey('financiamiento_titulo'), label: 'Título Financiamiento', name: 'financiamiento_titulo', type: 'text' },
    { key: generateKey('financiamiento_boton'), label: 'Texto del Botón', name: 'financiamiento_boton', type: 'text' },

    {
      key: generateKey('contacto_tab'),
      label: 'Sección: Contacto',
      name: '',
      type: 'tab',
    },
    { key: generateKey('contacto_subtitulo'), label: 'Contacto Subtítulo', name: 'contacto_subtitulo', type: 'text' },
    { key: generateKey('contacto_titulo_bold'), label: 'Contacto Título (Bold)', name: 'contacto_titulo_bold', type: 'text' },
    { key: generateKey('contacto_texto'), label: 'Contacto Texto', name: 'contacto_texto', type: 'textarea' }
  ],
  location: [
    [
      {
        param: 'page',
        operator: '==',
        value: '10' // Page ID 10 is your "Inicio" page
      }
    ]
  ],
  menu_order: 0,
  position: 'normal',
  style: 'seamless',
  label_placement: 'top',
  instruction_placement: 'label',
  hide_on_screen: ['the_content'],
  active: true,
  description: '',
};

fs.writeFileSync('acf-export-inicio.json', JSON.stringify([inicioGroup], null, 2));
console.log('Archivo acf-export-inicio.json generado exitosamente.');
