import { _ as _export_sfc, s as stores, u as useI18n, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createCommentVNode, F as Fragment, t as toDisplayString, a as unref, l as ref, m as onMounted, p as onUnmounted, h as createBlock, f as createTextVNode } from './index.926c9e7e.js';

const Preview_vue_vue_type_style_index_0_scoped_c08d1d11_lang = '';

const _hoisted_1$1 = { class: "profile-left" };
const _hoisted_2$1 = { class: "artist-photo" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = ["src", "alt"];
const _hoisted_5$1 = { class: "care-notes" };
const _hoisted_6$1 = { class: "actions" };

    
const _sfc_main$1 = {
  __name: 'Preview',
  props: {
        artist: {
            type: Object,
            required: true
        }
    },
  setup(__props) {

    const artists = stores.artists();
    const { t } = useI18n();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createCommentVNode(" Видео-аватарка для профиля "),
      (__props.artist.video)
        ? (openBlock(), createElementBlock("video", {
            key: 0,
            src: __props.artist.video,
            autoplay: "",
            loop: "",
            muted: "",
            playsinline: "",
            class: "artist-video"
          }, null, 8 /* PROPS */, _hoisted_3$1))
        : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Обычное фото, если видео нет "),
            createBaseVNode("img", {
              src: __props.artist.photo,
              alt: __props.artist.name
            }, null, 8 /* PROPS */, _hoisted_4$1)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
    ]),
    createBaseVNode("div", _hoisted_5$1, [
      createBaseVNode("h3", null, "🍲 " + toDisplayString(unref(t)('pages.artist.diet')), 1 /* TEXT */),
      createBaseVNode("p", null, toDisplayString(__props.artist.diet), 1 /* TEXT */)
    ]),
    createBaseVNode("div", _hoisted_6$1, [
      createBaseVNode("button", {
        class: "btn btn-action",
        onClick: _cache[0] || (_cache[0] = $event => (unref(artists).adoptProcess(__props.artist)))
      }, toDisplayString(unref(t)('common.pick-up')), 1 /* TEXT */)
    ])
  ]))
}
}

};
const Preview = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-c08d1d11"],['__file',"D:/job/artist-shelter/src/pages/Artist/components/Preview.vue"]]);

const Artist_vue_vue_type_style_index_0_scoped_7a09ed22_lang = '';

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "profile-grid" };
const _hoisted_3 = { class: "profile-right" };
const _hoisted_4 = { class: "badge" };
const _hoisted_5 = { class: "status" };
const _hoisted_6 = {
  class: "description",
  style: {}
};
const _hoisted_7 = { class: "traits" };
const _hoisted_8 = { class: "trait-item" };
const _hoisted_9 = { class: "trait-label" };
const _hoisted_10 = { class: "trait-value" };
const _hoisted_11 = { class: "trait-item" };
const _hoisted_12 = { class: "trait-label" };
const _hoisted_13 = { class: "trait-value" };
const _hoisted_14 = { class: "trait-item" };
const _hoisted_15 = { class: "trait-label" };
const _hoisted_16 = { class: "trait-value" };
const _hoisted_17 = { class: "trait-item" };
const _hoisted_18 = { class: "trait-label" };
const _hoisted_19 = { class: "trait-value" };
const _hoisted_20 = { class: "social-passport" };
const _hoisted_21 = { class: "social-links" };
const _hoisted_22 = ["href", "title"];
const _hoisted_23 = ["href", "title"];
const _hoisted_24 = ["href", "title"];
const _hoisted_25 = ["href", "title"];
const _hoisted_26 = ["href", "title"];
const _hoisted_27 = ["href", "title"];
const _hoisted_28 = ["href", "title"];
const _hoisted_29 = ["href", "title"];
const _hoisted_30 = ["href", "title"];
const _hoisted_31 = { class: "actions" };
const _hoisted_32 = ["href"];
const _hoisted_33 = { class: "attention" };

    
const _sfc_main = {
  __name: 'Artist',
  props: {
        code: {
            type: String,
            required: true
        }
    },
  setup(__props) {

    const artists = stores.artists();
    const { t } = useI18n();

    const isMobile = ref(false);

    const props = __props;

    const artist = ref(stores.artists().getArtist(props.code));

    const checkWidth = () => {
        // Условие: если экран БОЛЬШЕ 780, телепорт отключен (disabled = true)
        isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
        checkWidth();
        window.addEventListener('resize', checkWidth);

        setTimeout(() => {
            artist.value = stores.artists().getArtist(props.code);
        }, 100);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkWidth);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createCommentVNode(" Левая колонка: Визуал "),
      (!isMobile.value)
        ? (openBlock(), createBlock(Preview, {
            key: 0,
            artist: artist.value
          }, null, 8 /* PROPS */, ["artist"]))
        : createCommentVNode("v-if", true),
      createCommentVNode(" Правая колонка: Инфо "),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("span", _hoisted_4, "ID: " + toDisplayString(artist.value.id) + "-LOFI", 1 /* TEXT */),
        createBaseVNode("h1", null, toDisplayString(artist.value.name), 1 /* TEXT */),
        createBaseVNode("p", _hoisted_5, "● " + toDisplayString(artist.value.status), 1 /* TEXT */),
        createBaseVNode("p", _hoisted_6, toDisplayString(artist.value.description), 1 /* TEXT */),
        (isMobile.value)
          ? (openBlock(), createBlock(Preview, {
              key: 0,
              artist: artist.value
            }, null, 8 /* PROPS */, ["artist"]))
          : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, toDisplayString(unref(t)('entity.artist.stats.badge')), 1 /* TEXT */),
            createBaseVNode("div", _hoisted_10, toDisplayString(artist.value.badge), 1 /* TEXT */)
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, toDisplayString(unref(t)('entity.artist.stats.home')), 1 /* TEXT */),
            createBaseVNode("div", _hoisted_13, toDisplayString(artist.value.home), 1 /* TEXT */)
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, toDisplayString(unref(t)('entity.artist.stats.vaccination')), 1 /* TEXT */),
            createBaseVNode("div", _hoisted_16, toDisplayString(artist.value.vaccination), 1 /* TEXT */)
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, toDisplayString(unref(t)('entity.artist.stats.age')), 1 /* TEXT */),
            createBaseVNode("div", _hoisted_19, toDisplayString(artist.value.age), 1 /* TEXT */)
          ])
        ]),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("h3", null, "📂 " + toDisplayString(unref(t)('pages.artist.links')) + ":", 1 /* TEXT */),
          createBaseVNode("div", _hoisted_21, [
            (artist.value.links.spotify)
              ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: artist.value.links.spotify,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-1')
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("span", null, "🎧", -1 /* HOISTED */),
                  createTextVNode(" Spotify ")
                ]), 8 /* PROPS */, _hoisted_22))
              : createCommentVNode("v-if", true),
            (artist.value.links.youtube)
              ? (openBlock(), createElementBlock("a", {
                  key: 1,
                  href: artist.value.links.youtube,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-3')
                }, _cache[2] || (_cache[2] = [
                  createBaseVNode("span", null, "📺", -1 /* HOISTED */),
                  createTextVNode(" YouTube ")
                ]), 8 /* PROPS */, _hoisted_23))
              : createCommentVNode("v-if", true),
            (artist.value.links.applemusic)
              ? (openBlock(), createElementBlock("a", {
                  key: 2,
                  href: artist.value.links.applemusic,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-2')
                }, _cache[3] || (_cache[3] = [
                  createBaseVNode("span", null, "🍎", -1 /* HOISTED */),
                  createTextVNode(" Apple Music ")
                ]), 8 /* PROPS */, _hoisted_24))
              : createCommentVNode("v-if", true),
            (artist.value.links.vk)
              ? (openBlock(), createElementBlock("a", {
                  key: 3,
                  href: artist.value.links.vk,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-8')
                }, _cache[4] || (_cache[4] = [
                  createBaseVNode("span", null, "💙", -1 /* HOISTED */),
                  createTextVNode(" VK ")
                ]), 8 /* PROPS */, _hoisted_25))
              : createCommentVNode("v-if", true),
            (artist.value.links.threads)
              ? (openBlock(), createElementBlock("a", {
                  key: 4,
                  href: artist.value.links.threads,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-7')
                }, _cache[5] || (_cache[5] = [
                  createBaseVNode("span", null, "📝", -1 /* HOISTED */),
                  createTextVNode(" Threads ")
                ]), 8 /* PROPS */, _hoisted_26))
              : createCommentVNode("v-if", true),
            (artist.value.links.instagram)
              ? (openBlock(), createElementBlock("a", {
                  key: 5,
                  href: artist.value.links.instagram,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-5')
                }, _cache[6] || (_cache[6] = [
                  createBaseVNode("span", null, "📸", -1 /* HOISTED */),
                  createTextVNode(" Instagram ")
                ]), 8 /* PROPS */, _hoisted_27))
              : createCommentVNode("v-if", true),
            (artist.value.links.telegram)
              ? (openBlock(), createElementBlock("a", {
                  key: 6,
                  href: artist.value.links.telegram,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-9')
                }, _cache[7] || (_cache[7] = [
                  createBaseVNode("span", null, "✈️", -1 /* HOISTED */),
                  createTextVNode(" Telegram ")
                ]), 8 /* PROPS */, _hoisted_28))
              : createCommentVNode("v-if", true),
            (artist.value.links.yandexmusic)
              ? (openBlock(), createElementBlock("a", {
                  key: 7,
                  href: artist.value.links.yandexmusic,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-6')
                }, _cache[8] || (_cache[8] = [
                  createBaseVNode("span", null, "💛", -1 /* HOISTED */),
                  createTextVNode(" Yandex.Music ")
                ]), 8 /* PROPS */, _hoisted_29))
              : createCommentVNode("v-if", true),
            (artist.value.links.soundcloud)
              ? (openBlock(), createElementBlock("a", {
                  key: 8,
                  href: artist.value.links.soundcloud,
                  target: "_blank",
                  class: "social-item",
                  title: unref(t)('pages.artist.link-title-4')
                }, _cache[9] || (_cache[9] = [
                  createBaseVNode("span", null, "☁️", -1 /* HOISTED */),
                  createTextVNode(" SoundCloud ")
                ]), 8 /* PROPS */, _hoisted_30))
              : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("p", null, toDisplayString(unref(t)('pages.artist.attention')), 1 /* TEXT */)
        ]),
        createBaseVNode("div", _hoisted_31, [
          (artist.value?.media)
            ? (openBlock(), createElementBlock("a", {
                key: 0,
                target: "_blank",
                href: artist.value.media,
                class: "btn-large btn-adopt"
              }, toDisplayString(unref(t)('pages.artist.share-video')), 9 /* TEXT, PROPS */, _hoisted_32))
            : createCommentVNode("v-if", true),
          createBaseVNode("button", {
            class: "btn-large btn-share",
            onClick: _cache[0] || (_cache[0] = $event => (unref(artists).shareProcess(artist.value)))
          }, toDisplayString(unref(t)('pages.artist.share-social')), 1 /* TEXT */)
        ]),
        createBaseVNode("p", _hoisted_33, toDisplayString(unref(t)('pages.artist.attention-2')), 1 /* TEXT */)
      ])
    ])
  ]))
}
}

};
const Artist = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-7a09ed22"],['__file',"D:/job/artist-shelter/src/pages/Artist/Artist.vue"]]);

export { Artist as default };
