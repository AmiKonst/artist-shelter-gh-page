import { _ as _export_sfc, u as useI18n, s as stores, r as resolveComponent, a as unref, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createCommentVNode, e as createVNode, w as withCtx, f as createTextVNode, F as Fragment, n as normalizeClass, g as renderList, h as createBlock } from './index.fd498915.js';

const Hero_vue_vue_type_style_index_0_scoped_999f0595_lang = '';

const _hoisted_1$2 = {
  key: 0,
  class: "hero"
};
const _hoisted_2$2 = { class: "container" };
const _hoisted_3$2 = { class: "hero-card" };
const _hoisted_4$2 = {
  key: 0,
  class: "hero-badge"
};
const _hoisted_5$2 = { class: "hero-img" };
const _hoisted_6$1 = ["src", "alt"];
const _hoisted_7 = { class: "hero-info" };
const _hoisted_8 = { class: "artist-name" };
const _hoisted_9 = { class: "artist-desc" };
const _hoisted_10 = { class: "hero-actions" };

    
const _sfc_main$3 = {
  __name: 'Hero',
  setup(__props) {

    const { t } = useI18n();
    const artists = stores.artists();

return (_ctx, _cache) => {
  const _component_router_link = resolveComponent("router-link");

  return (unref(artists).randomArtist)
    ? (openBlock(), createElementBlock("section", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            (unref(artists).randomArtist.herobadge)
              ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(unref(artists).randomArtist.herobadge), 1 /* TEXT */))
              : createCommentVNode("v-if", true),
            createBaseVNode("div", _hoisted_5$2, [
              createBaseVNode("img", {
                src: unref(artists).randomArtist.photo,
                alt: unref(artists).randomArtist.name
              }, null, 8 /* PROPS */, _hoisted_6$1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("h2", _hoisted_8, toDisplayString(unref(artists).randomArtist.name), 1 /* TEXT */),
              createBaseVNode("p", _hoisted_9, toDisplayString(unref(artists).randomArtist.description), 1 /* TEXT */),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_router_link, {
                  to: {
                            name: 'artist',
                            params: {
                                code: unref(artists).randomArtist.code
                            }
                        },
                  class: "btn btn-main"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)('common.questionnaire')), 1 /* TEXT */)
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["to"]),
                createBaseVNode("button", {
                  class: "btn btn-action",
                  onClick: _cache[0] || (_cache[0] = $event => (unref(artists).adoptProcess(unref(artists).randomArtist)))
                }, toDisplayString(unref(t)('common.pick-up')), 1 /* TEXT */)
              ])
            ])
          ])
        ])
      ]))
    : createCommentVNode("v-if", true)
}
}

};
const Hero = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-999f0595"],['__file',"D:/job/artist-shelter/src/components/ui/Hero.vue"]]);

const Artist_vue_vue_type_style_index_0_scoped_02df1666_lang = '';

const _hoisted_1$1 = { class: "card-img" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = ["src", "alt"];
const _hoisted_4$1 = { class: "card-name" };
const _hoisted_5$1 = { class: "card-desc" };
const _hoisted_6 = { class: "btn-group" };

    
const _sfc_main$2 = {
  __name: 'Artist',
  props: {
        item: {
            type: Object,
            required: true
        }
    },
  setup(__props) {

    const { t } = useI18n();
    const artists = stores.artists();

return (_ctx, _cache) => {
  const _component_router_link = resolveComponent("router-link");

  return (__props.item)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["card", [`artist-card-${__props.item.id}`]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createCommentVNode(" Если есть видео, выводим его "),
          (__props.item.video)
            ? (openBlock(), createElementBlock("video", {
                key: 0,
                src: __props.item.video,
                autoplay: "",
                loop: "",
                muted: "",
                playsinline: "",
                class: "artist-video"
              }, null, 8 /* PROPS */, _hoisted_2$1))
            : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Иначе выводим обычное фото "),
                createBaseVNode("img", {
                  src: __props.item.photo,
                  alt: __props.item.name
                }, null, 8 /* PROPS */, _hoisted_3$1)
              ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        ]),
        createBaseVNode("div", _hoisted_4$1, toDisplayString(__props.item.name), 1 /* TEXT */),
        createBaseVNode("div", _hoisted_5$1, toDisplayString(__props.item.description), 1 /* TEXT */),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_component_router_link, {
            to: {
                name: 'artist',
                params: {
                    code: __props.item.code
                }
            },
            class: "btn btn-main"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)('common.questionnaire')), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["to"]),
          createBaseVNode("button", {
            class: "btn btn-action",
            onClick: _cache[0] || (_cache[0] = $event => (unref(artists).adoptProcess(__props.item)))
          }, toDisplayString(unref(t)('common.pick-up')), 1 /* TEXT */)
        ])
      ], 2 /* CLASS */))
    : createCommentVNode("v-if", true)
}
}

};
const Artist = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-02df1666"],['__file',"D:/job/artist-shelter/src/pages/Home/components/Artist.vue"]]);

const Artists_vue_vue_type_style_index_0_scoped_9ba52c24_lang = '';

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "grid-title" };
const _hoisted_3 = { class: "grid-subtitle" };
const _hoisted_4 = { class: "grid" };
const _hoisted_5 = { class: "btn-load" };

    
const _sfc_main$1 = {
  __name: 'Artists',
  setup(__props) {

    const { t } = useI18n();
    const artists = stores.artists();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("main", _hoisted_1, [
    createBaseVNode("h3", _hoisted_2, toDisplayString(unref(t)('pages.home.artists.our-wards')), 1 /* TEXT */),
    createBaseVNode("p", _hoisted_3, toDisplayString(unref(t)('pages.home.artists.description')), 1 /* TEXT */),
    createBaseVNode("div", _hoisted_4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(artists).artists, (item) => {
        return (openBlock(), createBlock(Artist, {
          key: item.code,
          item: item
        }, null, 8 /* PROPS */, ["item"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    (unref(artists).total > unref(artists).artists.length)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "load-more-container",
          onClick: _cache[0] || (_cache[0] = (...args) => (unref(artists).getArtists && unref(artists).getArtists(...args)))
        }, [
          createBaseVNode("button", _hoisted_5, toDisplayString(unref(t)('pages.home.artists.more')), 1 /* TEXT */)
        ]))
      : createCommentVNode("v-if", true)
  ]))
}
}

};
const Artists = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-9ba52c24"],['__file',"D:/job/artist-shelter/src/pages/Home/components/Artists.vue"]]);

const _sfc_main = {
  __name: 'Home',
  setup(__props) {

   
return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(Hero),
    createVNode(Artists)
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Home = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/job/artist-shelter/src/pages/Home/Home.vue"]]);

export { Home as default };
