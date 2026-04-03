import { _ as _export_sfc, u as useI18n, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createCommentVNode, t as toDisplayString, a as unref, s as stores, i as reactive, e as createVNode, f as createTextVNode, j as withDirectives, v as vModelText } from './index.1cf9622c.js';

const Photo_vue_vue_type_style_index_0_scoped_a6d4e1a9_lang = '';

const _hoisted_1$1 = { class: "shelter-banner" };
const _hoisted_2$1 = { class: "cages-container" };
const _hoisted_3$1 = { class: "cage" };
const _hoisted_4$1 = { class: "label" };
const _hoisted_5$1 = { class: "cage active" };
const _hoisted_6$1 = { class: "label" };
const _hoisted_7$1 = { class: "cage" };
const _hoisted_8$1 = { class: "label" };
const _hoisted_9$1 = { class: "cage hide-mobile" };
const _hoisted_10$1 = { class: "label" };
const _hoisted_11$1 = { class: "overlay-text" };
const _hoisted_12$1 = { class: "location" };
const _hoisted_13$1 = { class: "status" };
    
const _sfc_main$1 = {
  __name: 'Photo',
  setup(__props) {

    const { t } = useI18n();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "fence" }, null, -1 /* HOISTED */)),
    createCommentVNode(" Добавляем обертку для клеток, чтобы контролировать их кучность "),
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        _cache[0] || (_cache[0] = createBaseVNode("span", null, "🎸", -1 /* HOISTED */)),
        createBaseVNode("div", _hoisted_4$1, toDisplayString(unref(t)('pages.about.photo.sector-1')), 1 /* TEXT */)
      ]),
      createBaseVNode("div", _hoisted_5$1, [
        _cache[1] || (_cache[1] = createBaseVNode("span", null, "🎤", -1 /* HOISTED */)),
        createBaseVNode("div", _hoisted_6$1, toDisplayString(unref(t)('pages.about.photo.sector-2')), 1 /* TEXT */)
      ]),
      createBaseVNode("div", _hoisted_7$1, [
        _cache[2] || (_cache[2] = createBaseVNode("span", null, "🎹", -1 /* HOISTED */)),
        createBaseVNode("div", _hoisted_8$1, toDisplayString(unref(t)('pages.about.photo.sector-3')), 1 /* TEXT */)
      ]),
      createCommentVNode(" Эту клетку скроем на совсем маленьких экранах (iphone SE и т.д.) "),
      createBaseVNode("div", _hoisted_9$1, [
        _cache[3] || (_cache[3] = createBaseVNode("span", null, "🎷", -1 /* HOISTED */)),
        createBaseVNode("div", _hoisted_10$1, toDisplayString(unref(t)('pages.about.photo.sector-4')), 1 /* TEXT */)
      ])
    ]),
    createBaseVNode("div", _hoisted_11$1, [
      createBaseVNode("span", _hoisted_12$1, "📍 " + toDisplayString(unref(t)('pages.about.photo.location-1')), 1 /* TEXT */),
      createBaseVNode("span", _hoisted_13$1, toDisplayString(unref(t)('pages.about.photo.mode')), 1 /* TEXT */)
    ])
  ]))
}
}

};
const Photo = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-a6d4e1a9"],['__file',"D:/job/artist-shelter/src/pages/About/components/Photo.vue"]]);

const About_vue_vue_type_style_index_0_scoped_4ec509e6_lang = '';

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "about-section" };
const _hoisted_3 = { class: "bilbo-section" };
const _hoisted_4 = { class: "bilbo-content" };
const _hoisted_5 = { class: "bilbo-badge" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "bilbo-features" };
const _hoisted_8 = {
  href: "https://bilbomusic.com",
  target: "_blank",
  class: "btn-bilbo"
};
const _hoisted_9 = { class: "drop-box" };
const _hoisted_10 = { style: {"font-size":"14px","color":"#868e96"} };
const _hoisted_11 = { class: "input-group" };
const _hoisted_12 = { style: {"font-size":"12px","font-weight":"bold"} };
const _hoisted_13 = ["placeholder"];
const _hoisted_14 = { style: {"font-size":"12px","font-weight":"bold"} };
const _hoisted_15 = ["placeholder"];
const _hoisted_16 = { class: "footer-links" };

    
const _sfc_main = {
  __name: 'About',
  setup(__props) {

    const { t } = useI18n();
    stores.artists();

    const data = reactive({
        name: '',
        description: ''
    });

    const submit = () => {
        const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfiywnRPFQtSUblZltl1c1HXq_VZ1wtn78VXR1pGM0MDweOdw/viewform?usp=pp_url";

        const queryParams = new URLSearchParams({
            "entry.1481386257": data.name, // Имя артиста
            "entry.263289091": data.description  // Сообщение
        });

        const finalUrl = `${baseUrl}&${queryParams.toString()}`;

        // Открываем форму в новой вкладке
        window.open(finalUrl, '_blank');
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" \"Фото\" приюта "),
    createCommentVNode(" <div class=\"shelter-photo-container\">\r\n           <div class=\"emoji-cluster\">🏘️ 🎸 🔊 ☁️ 🐕</div>\r\n           <div class=\"shelter-photo-text\">\r\n            {{ t('pages.about.photo.alt') }}\r\n            </div>\r\n       </div> "),
    createVNode(Photo),
    createBaseVNode("section", _hoisted_2, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.about.title')), 1 /* TEXT */),
      createBaseVNode("p", null, toDisplayString(unref(t)('pages.about.description-1')), 1 /* TEXT */),
      _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1 /* HOISTED */)),
      createBaseVNode("p", null, toDisplayString(unref(t)('pages.about.description-2')), 1 /* TEXT */),
      _cache[3] || (_cache[3] = createBaseVNode("p", null, null, -1 /* HOISTED */))
    ]),
    createBaseVNode("section", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, toDisplayString(unref(t)('pages.about.partner.label')), 1 /* TEXT */),
        createBaseVNode("h2", null, toDisplayString(unref(t)('pages.about.partner.title')) + " 🌳", 1 /* TEXT */),
        createBaseVNode("p", {
          innerHTML: unref(t)('pages.about.partner.description')
        }, null, 8 /* PROPS */, _hoisted_6),
        createBaseVNode("ul", _hoisted_7, [
          createBaseVNode("li", null, [
            _cache[4] || (_cache[4] = createTextVNode("🤖 ")),
            createBaseVNode("strong", null, toDisplayString(unref(t)('pages.about.partner.achieve-1')) + ":", 1 /* TEXT */),
            createTextVNode(" " + toDisplayString(unref(t)('pages.about.partner.achieve-1-1')), 1 /* TEXT */)
          ]),
          createBaseVNode("li", null, [
            _cache[5] || (_cache[5] = createTextVNode("📱 ")),
            createBaseVNode("strong", null, toDisplayString(unref(t)('pages.about.partner.achieve-2')) + ":", 1 /* TEXT */),
            createTextVNode(" " + toDisplayString(unref(t)('pages.about.partner.achieve-2-2')), 1 /* TEXT */)
          ]),
          createBaseVNode("li", null, [
            _cache[6] || (_cache[6] = createTextVNode("🙌 ")),
            createBaseVNode("strong", null, toDisplayString(unref(t)('pages.about.partner.achieve-3')) + ":", 1 /* TEXT */),
            createTextVNode(" " + toDisplayString(unref(t)('pages.about.partner.achieve-3-3')), 1 /* TEXT */)
          ])
        ]),
        createBaseVNode("a", _hoisted_8, toDisplayString(unref(t)('pages.about.partner.visite')), 1 /* TEXT */)
      ])
    ]),
    createCommentVNode(" Смешная форма "),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("h3", null, "📦 " + toDisplayString(unref(t)('pages.about.form.title')), 1 /* TEXT */),
      createBaseVNode("p", _hoisted_10, toDisplayString(unref(t)('pages.about.form.description-1')), 1 /* TEXT */),
      createBaseVNode("form", _hoisted_11, [
        createBaseVNode("label", _hoisted_12, toDisplayString(unref(t)('pages.about.form.name.title')), 1 /* TEXT */),
        withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((data.name) = $event)),
          placeholder: unref(t)('pages.about.form.name.placeholder')
        }, null, 8 /* PROPS */, _hoisted_13), [
          [vModelText, data.name]
        ]),
        createBaseVNode("label", _hoisted_14, toDisplayString(unref(t)('pages.about.form.description.title')), 1 /* TEXT */),
        withDirectives(createBaseVNode("textarea", {
          rows: "3",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((data.description) = $event)),
          placeholder: unref(t)('pages.about.form.description.placeholder')
        }, null, 8 /* PROPS */, _hoisted_15), [
          [vModelText, data.description]
        ]),
        createBaseVNode("button", {
          type: "button",
          onClick: submit,
          class: "btn-submit"
        }, toDisplayString(unref(t)('pages.about.form.submit')), 1 /* TEXT */)
      ])
    ]),
    createBaseVNode("div", _hoisted_16, [
      createBaseVNode("p", null, toDisplayString(unref(t)('pages.about.address')), 1 /* TEXT */),
      _cache[7] || (_cache[7] = createBaseVNode("p", { style: {"margin-top":"10px"} }, "📧 tiufyakin@gmail.com", -1 /* HOISTED */))
    ])
  ]))
}
}

};
const About = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-4ec509e6"],['__file',"D:/job/artist-shelter/src/pages/About/About.vue"]]);

export { About as default };
