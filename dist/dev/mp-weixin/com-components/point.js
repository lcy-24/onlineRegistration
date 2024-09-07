"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "point",
  props: {
    show: { type: Boolean, required: true, default: false },
    title: { type: String, required: false, default: "\u4F60\u8FD8\u6CA1\u6709\u8BA2\u5355\u6570\u636E" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.show
      }, __props.show ? {
        b: common_vendor.t(__props.title)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1433db3c"], ["__file", "C:/Users/JackieChan/Desktop/Jack003/onlineRegistration/src/com-components/point.vue"]]);
wx.createComponent(Component);
