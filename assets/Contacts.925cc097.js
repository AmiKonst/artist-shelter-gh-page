import { _ as _export_sfc, u as useI18n, s as stores, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, a as unref, d as createCommentVNode } from './index.f5ee2a05.js';

const _imports_0 = "/img/me.jpg";

const Contacts_vue_vue_type_style_index_0_scoped_e5b0c213_lang = '';

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "director-card" };
const _hoisted_3 = { class: "pin" };
const _hoisted_4 = { class: "job-title" };
const _hoisted_5 = { class: "subtitle" };
const _hoisted_6 = { class: "contact-grid" };
const _hoisted_7 = {
  href: "https://open.spotify.com/artist/5l0NPpIKBDNIrlyYj9vqVn",
  target: "_blank",
  class: "contact-link"
};
const _hoisted_8 = {
  href: "https://www.youtube.com/@konstantintyufyakin",
  target: "_blank",
  class: "contact-link"
};
const _hoisted_9 = {
  href: "https://www.instagram.com/konstantintyufyakin/",
  target: "_blank",
  class: "contact-link"
};
const _hoisted_10 = {
  href: "https://t.me/konstantintyufyakin",
  target: "_blank",
  class: "contact-link tg"
};
const _hoisted_11 = {
  href: "https://music.yandex.ru/artist/5903397",
  target: "_blank",
  class: "contact-link ya-music"
};
const _hoisted_12 = {
  href: "https://vk.com/artist/konstantintyufyakin",
  target: "_blank",
  class: "contact-link vk"
};
const _hoisted_13 = {
  href: "mailto:tiufyakin@gmail.com",
  class: "contact-link email"
};
const _hoisted_14 = { class: "badge-list" };
const _hoisted_15 = { class: "badge" };
const _hoisted_16 = { class: "badge" };
const _hoisted_17 = { class: "badge" };
const _hoisted_18 = { class: "footer-note" };

    
const _sfc_main = {
  __name: 'Contacts',
  setup(__props) {

    const { t } = useI18n();
    stores.artists();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("span", _hoisted_3, toDisplayString(unref(t)('pages.contacts.role-2')), 1 /* TEXT */),
      _cache[7] || (_cache[7] = createBaseVNode("div", { class: "avatar" }, [
        createBaseVNode("img", {
          src: _imports_0,
          alt: "Tyufyakin Konstantin"
        })
      ], -1 /* HOISTED */)),
      _cache[8] || (_cache[8] = createBaseVNode("h1", null, "Tyufyakin Konstantin", -1 /* HOISTED */)),
      createBaseVNode("div", _hoisted_4, toDisplayString(unref(t)('pages.contacts.role')), 1 /* TEXT */),
      createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)('pages.contacts.subtitle')), 1 /* TEXT */),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("a", _hoisted_7, [
          createBaseVNode("span", null, "🎧 " + toDisplayString(unref(t)('pages.contacts.listen')), 1 /* TEXT */),
          _cache[0] || (_cache[0] = createBaseVNode("span", null, "Spotify", -1 /* HOISTED */))
        ]),
        createBaseVNode("a", _hoisted_8, [
          createBaseVNode("span", null, "📹 " + toDisplayString(unref(t)('pages.contacts.youtube')), 1 /* TEXT */),
          _cache[1] || (_cache[1] = createBaseVNode("span", null, "YouTube", -1 /* HOISTED */))
        ]),
        createBaseVNode("a", _hoisted_9, [
          createBaseVNode("span", null, "📸 " + toDisplayString(unref(t)('pages.contacts.instagram')), 1 /* TEXT */),
          _cache[2] || (_cache[2] = createBaseVNode("span", null, "Instagram", -1 /* HOISTED */))
        ]),
        createCommentVNode(" ТЕЛЕГРАМ "),
        createBaseVNode("a", _hoisted_10, [
          createBaseVNode("span", null, "💬 " + toDisplayString(unref(t)('pages.contacts.telegram')), 1 /* TEXT */),
          _cache[3] || (_cache[3] = createBaseVNode("span", null, "Telegram", -1 /* HOISTED */))
        ]),
        createCommentVNode(" ЯНДЕКС МУЗЫКА "),
        createBaseVNode("a", _hoisted_11, [
          createBaseVNode("span", null, "🎧 " + toDisplayString(unref(t)('pages.contacts.yandex-music')), 1 /* TEXT */),
          _cache[4] || (_cache[4] = createBaseVNode("span", null, "Yandex Music", -1 /* HOISTED */))
        ]),
        createCommentVNode(" ВК "),
        createBaseVNode("a", _hoisted_12, [
          createBaseVNode("span", null, "🎸 " + toDisplayString(unref(t)('pages.contacts.vk')), 1 /* TEXT */),
          _cache[5] || (_cache[5] = createBaseVNode("span", null, "VK", -1 /* HOISTED */))
        ]),
        createCommentVNode(" ПОЧТА "),
        createBaseVNode("a", _hoisted_13, [
          createBaseVNode("span", null, "📩 " + toDisplayString(unref(t)('pages.contacts.email')), 1 /* TEXT */),
          _cache[6] || (_cache[6] = createBaseVNode("span", null, "Email", -1 /* HOISTED */))
        ])
      ]),
      createBaseVNode("div", _hoisted_14, [
        createBaseVNode("span", _hoisted_15, "● " + toDisplayString(unref(t)('pages.contacts.badge-1')), 1 /* TEXT */),
        createBaseVNode("span", _hoisted_16, "● " + toDisplayString(unref(t)('pages.contacts.badge-2')), 1 /* TEXT */),
        createBaseVNode("span", _hoisted_17, "● " + toDisplayString(unref(t)('pages.contacts.badge-3')), 1 /* TEXT */)
      ])
    ]),
    createBaseVNode("div", _hoisted_18, [
      createBaseVNode("p", null, toDisplayString(unref(t)('pages.contacts.silence')), 1 /* TEXT */)
    ])
  ]))
}
}

};
const Contacts = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-e5b0c213"],['__file',"D:/job/artist-shelter/src/pages/Contacts/Contacts.vue"]]);

export { Contacts as default };
