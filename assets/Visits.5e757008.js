import { _ as _export_sfc, u as useI18n, k as api, i as reactive, l as ref, m as onMounted, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, a as unref, d as createCommentVNode, n as normalizeClass, j as withDirectives, v as vModelText, F as Fragment, g as renderList, f as createTextVNode } from './index.1cf9622c.js';

const Visits_vue_vue_type_style_index_0_scoped_20fce31d_lang = '';

const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "input-group levels" };
const _hoisted_4 = { class: "label-muted" };
const _hoisted_5 = { class: "levels-grid" };
const _hoisted_6 = { class: "level-name" };
const _hoisted_7 = { class: "level-name" };
const _hoisted_8 = { class: "level-name" };
const _hoisted_9 = { class: "qr-section" };
const _hoisted_10 = { class: "qr-grid" };
const _hoisted_11 = { class: "qr-item" };
const _hoisted_12 = { class: "qr-placeholder" };
const _hoisted_13 = ["src"];
const _hoisted_14 = { class: "qr-item" };
const _hoisted_15 = { class: "qr-placeholder" };
const _hoisted_16 = ["src"];
const _hoisted_17 = { class: "parcel-form" };
const _hoisted_18 = { class: "input-group" };
const _hoisted_19 = ["placeholder"];
const _hoisted_20 = { class: "title" };
const _hoisted_21 = { class: "search-container" };
const _hoisted_22 = ["placeholder"];
const _hoisted_23 = {
  key: 0,
  class: "search-results"
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = { style: {"font-size":"20px"} };
const _hoisted_26 = ["src", "alt"];
const _hoisted_27 = ["placeholder"];
const _hoisted_28 = { class: "history-title" };
const _hoisted_29 = { class: "parcel-list" };
const _hoisted_30 = { class: "parcel-header" };
const _hoisted_31 = { class: "parcel-target" };
const _hoisted_32 = ["innerHTML"];
const _hoisted_33 = { class: "attention" };

    
const _sfc_main = {
  __name: 'Visits',
  setup(__props) {

    const { t } = useI18n();
    const donats = api.donats();
    const artists = api.artists();

    const data = reactive({
        take: 20,
        total: 0,
        items: [],
        searchStr: '',
        searchResults: [],
        form: {
            from: '',
            hash: '',
            artistName: '',
            description: ''
        },
        opened: false
    });
    window.q = data;

    const open = () => {
        data.opened = true;
        const payload = artists.list(0, 3, data.searchStr);
        data.searchResults = payload?.items || [];
        console.log(data.searchResults);
    };

    const close = () => {
        setTimeout(() => { data.opened = false; }, 100);
    };

    const submit = () => {
        // https://docs.google.com/forms/d/e/1FAIpQLSdRcAzwSKS9M1cgSalq1lhOKNqh91oeyD9gAzcwBaYcXfhZKQ/viewform?usp=pp_url&entry.1156279207=Name&entry.849578901=Hash&entry.693688954=ArtistName&entry.1479049253=Description

        const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdRcAzwSKS9M1cgSalq1lhOKNqh91oeyD9gAzcwBaYcXfhZKQ/viewform?usp=pp_url";

        const queryParams = new URLSearchParams({
            "entry.1156279207": '',     // Имя отправителя
            "entry.849578901": data.form.hash, // Хеш
            "entry.693688954": data.form.artistName,    // Имя артиста
            "entry.1479049253": data.form.description  // Сообщение
        });

        const finalUrl = `${baseUrl}&${queryParams.toString()}`;

        // Открываем форму в новой вкладке
        window.open(finalUrl, '_blank');
    };

    const selectArtist = (artist) => {
        console.log(artist);
        data.form.artistName = artist?.name;
        data.searchStr = artist?.name || '';
        close();
    };

    // Состояние выбранного уровня (1, 2 или 3)
    const selectedLevel = ref(2); // По умолчанию "Витамины"

    const selectLevel = (level) => {
        selectedLevel.value = level;
    };

    // Хэш и сообщение тоже сделаем реактивными для формы
    ref('');
    ref('');
    ref(null); // Сюда упадет объект выбранного артиста

    const getDonats = () => {
        const payload = donats.list(data.items.length, data.take);
        console.log(payload.items);

        if (payload?.items) {
            data.items.splice(data.items.length - 1, 0, ...payload.items);
            data.total = payload.total;
        }
    };

    onMounted(() => {
        getDonats();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("header", _hoisted_2, [
      createBaseVNode("h1", null, toDisplayString(unref(t)('pages.visits.title')) + " 🍎", 1 /* TEXT */),
      createBaseVNode("p", null, toDisplayString(unref(t)('pages.visits.description')), 1 /* TEXT */)
    ]),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("label", _hoisted_4, toDisplayString(unref(t)('pages.visits.levels.title')) + ":", 1 /* TEXT */),
      createBaseVNode("div", _hoisted_5, [
        createCommentVNode(" Уровень 1 "),
        createBaseVNode("div", {
          class: normalizeClass(["level-card", { active: selectedLevel.value === 1 }]),
          onClick: _cache[0] || (_cache[0] = $event => (selectLevel(1)))
        }, [
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "level-icon" }, "📦", -1 /* HOISTED */)),
          createBaseVNode("div", _hoisted_6, toDisplayString(unref(t)('pages.visits.levels.level-1')), 1 /* TEXT */),
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "level-price" }, "~0.01 SOL", -1 /* HOISTED */))
        ], 2 /* CLASS */),
        createCommentVNode(" Уровень 2 "),
        createBaseVNode("div", {
          class: normalizeClass(["level-card level-2", { active: selectedLevel.value === 2 }]),
          onClick: _cache[1] || (_cache[1] = $event => (selectLevel(2)))
        }, [
          _cache[9] || (_cache[9] = createBaseVNode("div", { class: "level-icon" }, "🍎", -1 /* HOISTED */)),
          createBaseVNode("div", _hoisted_7, toDisplayString(unref(t)('pages.visits.levels.level-2')), 1 /* TEXT */),
          _cache[10] || (_cache[10] = createBaseVNode("div", { class: "level-price" }, "~0.1 SOL", -1 /* HOISTED */))
        ], 2 /* CLASS */),
        createCommentVNode(" Уровень 3 "),
        createBaseVNode("div", {
          class: normalizeClass(["level-card level-3", { active: selectedLevel.value === 3 }]),
          onClick: _cache[2] || (_cache[2] = $event => (selectLevel(3)))
        }, [
          _cache[11] || (_cache[11] = createBaseVNode("div", { class: "level-icon" }, "👑", -1 /* HOISTED */)),
          createBaseVNode("div", _hoisted_8, toDisplayString(unref(t)('pages.visits.levels.level-3')), 1 /* TEXT */),
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "level-price" }, "~1 SOL+", -1 /* HOISTED */))
        ], 2 /* CLASS */)
      ])
    ]),
    createCommentVNode(" Реквизиты "),
    createBaseVNode("section", _hoisted_9, [
      createBaseVNode("h3", null, toDisplayString(unref(t)('pages.visits.qr.title')), 1 /* TEXT */),
      createBaseVNode("div", _hoisted_10, [
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("img", {
              src: `/img/wallets/sol-${selectedLevel.value}.png`,
              alt: "xezEAzwrpMryvEwonDW9XAYB9sRCtPtZp4zFuuVpE8u"
            }, null, 8 /* PROPS */, _hoisted_13)
          ]),
          _cache[13] || (_cache[13] = createBaseVNode("b", null, "Solana (SOL)", -1 /* HOISTED */)),
          _cache[14] || (_cache[14] = createBaseVNode("span", { class: "wallet-addr" }, "xezEAzwrpMryvEwonDW9XAYB9sRCtPtZp4zFuuVpE8u", -1 /* HOISTED */))
        ]),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("img", {
              src: `/img/wallets/ton-${selectedLevel.value}.png`,
              alt: "xezEAzwrpMryvEwonDW9XAYB9sRCtPtZp4zFuuVpE8u"
            }, null, 8 /* PROPS */, _hoisted_16)
          ]),
          _cache[15] || (_cache[15] = createBaseVNode("b", null, "TON", -1 /* HOISTED */)),
          _cache[16] || (_cache[16] = createBaseVNode("span", { class: "wallet-addr" }, "UQB10IPuc7gwVX_z03i0a5xKIxWnKXdMhZQlEL4oL8aysETz", -1 /* HOISTED */))
        ])
      ])
    ]),
    createCommentVNode(" Форма "),
    createBaseVNode("section", _hoisted_17, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.visits.form.title')), 1 /* TEXT */),
      createBaseVNode("form", _hoisted_18, [
        createCommentVNode(" Hash "),
        withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((data.form.hash) = $event)),
          placeholder: unref(t)('pages.visits.form.hash')
        }, null, 8 /* PROPS */, _hoisted_19), [
          [vModelText, data.form.hash]
        ]),
        createBaseVNode("label", _hoisted_20, toDisplayString(unref(t)('pages.visits.form.artist.title')), 1 /* TEXT */),
        createBaseVNode("div", _hoisted_21, [
          withDirectives(createBaseVNode("input", {
            type: "text",
            id: "artistSearch",
            class: "search-input",
            placeholder: unref(t)('pages.visits.form.artist.placeholder'),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((data.searchStr) = $event)),
            onFocus: open,
            onBlur: close,
            onInput: open
          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_22), [
            [vModelText, data.searchStr]
          ]),
          (data.opened)
            ? (openBlock(), createElementBlock("div", _hoisted_23, [
                createCommentVNode(" Спец-опция "),
                createBaseVNode("div", {
                  class: "search-item",
                  onClick: _cache[5] || (_cache[5] = $event => (selectArtist({ name: unref(t)('pages.visits.form.result.all') })))
                }, [
                  _cache[18] || (_cache[18] = createBaseVNode("div", { style: {"font-size":"20px"} }, "🍲", -1 /* HOISTED */)),
                  createBaseVNode("div", null, [
                    createBaseVNode("b", null, toDisplayString(unref(t)('pages.visits.form.result.all')), 1 /* TEXT */),
                    _cache[17] || (_cache[17] = createBaseVNode("br", null, null, -1 /* HOISTED */)),
                    createBaseVNode("span", null, toDisplayString(unref(t)('pages.visits.form.result.all-label')), 1 /* TEXT */)
                  ])
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(data.searchResults, (item) => {
                  return (openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "search-item",
                    onClick: $event => (selectArtist(item))
                  }, [
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("img", {
                        src: item.photo,
                        alt: item.name
                      }, null, 8 /* PROPS */, _hoisted_26)
                    ]),
                    createBaseVNode("div", null, [
                      createBaseVNode("b", null, toDisplayString(item.name), 1 /* TEXT */),
                      _cache[19] || (_cache[19] = createBaseVNode("br", null, null, -1 /* HOISTED */)),
                      createBaseVNode("span", null, "ID: " + toDisplayString(item.id) + "-LOFI", 1 /* TEXT */)
                    ])
                  ], 8 /* PROPS */, _hoisted_24))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : createCommentVNode("v-if", true)
        ]),
        withDirectives(createBaseVNode("textarea", {
          rows: "3",
          placeholder: unref(t)('pages.visits.form.description'),
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((data.form.description) = $event))
        }, null, 8 /* PROPS */, _hoisted_27), [
          [vModelText, data.form.description]
        ]),
        createBaseVNode("button", {
          type: "button",
          class: "btn-send",
          onClick: submit
        }, toDisplayString(unref(t)('pages.visits.form.submit')), 1 /* TEXT */)
      ])
    ]),
    createCommentVNode(" История "),
    createBaseVNode("h3", _hoisted_28, toDisplayString(unref(t)('pages.visits.log.title')), 1 /* TEXT */),
    createBaseVNode("div", _hoisted_29, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item) => {
        return (openBlock(), createElementBlock("div", {
          key: item.id,
          class: normalizeClass(["parcel-card", [`level-${item.rank}`]])
        }, [
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("span", null, [
              createTextVNode(toDisplayString(unref(t)('pages.visits.log.from')) + ": ", 1 /* TEXT */),
              createBaseVNode("b", null, toDisplayString(item.from), 1 /* TEXT */),
              createBaseVNode("span", {
                class: normalizeClass(["rank-badge", [`rank-${item.rank}`]])
              }, toDisplayString(['📦','🍎','👑'][item.rank - 1]) + " " + toDisplayString(unref(t)(`pages.visits.log.rank-${item.rank}`)), 3 /* TEXT, CLASS */)
            ]),
            createCommentVNode(" <span>5 мин назад</span> ")
          ]),
          createBaseVNode("div", null, [
            createTextVNode(toDisplayString(unref(t)('pages.visits.log.artist')) + ": ", 1 /* TEXT */),
            createBaseVNode("span", _hoisted_31, toDisplayString(item.artist?.name || unref(t)('pages.visits.form.result.all')), 1 /* TEXT */)
          ]),
          createBaseVNode("div", {
            class: "parcel-msg",
            innerHTML: `«${item.description}»`
          }, null, 8 /* PROPS */, _hoisted_32)
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createBaseVNode("p", _hoisted_33, [
      createTextVNode(toDisplayString(unref(t)('pages.visits.attention-1')) + " ", 1 /* TEXT */),
      _cache[20] || (_cache[20] = createBaseVNode("br", null, null, -1 /* HOISTED */)),
      createTextVNode(" " + toDisplayString(unref(t)('pages.visits.attention-2')), 1 /* TEXT */)
    ])
  ]))
}
}

};
const Visits = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-20fce31d"],['__file',"D:/job/artist-shelter/src/pages/Visits/Visits.vue"]]);

export { Visits as default };
