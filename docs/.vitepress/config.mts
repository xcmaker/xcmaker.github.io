import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "瓦力科创",
  description: "DIY军火库，万物皆可ZAO",
  lang: "zh-CN",
  head: [
    ['style', {}, `
      :root {
        --vp-c-brand: #2563eb;
        --vp-c-brand-light: #3b82f6;
        --vp-c-brand-dark: #1d4ed8;
        --vp-c-brand-1: #1e40af;
        --vp-c-brand-2: #1e3a8a;
        --vp-c-brand-3: #172554;
      }

      /* 导航栏科技蓝 */
      .VPNavBar {
        background: linear-gradient(90deg, #1e40af 0%, #2563eb 100%) !important;
      }

      .VPNavBar a, .VPNavBar .text {
        color: #fff !important;
      }

      .VPNavBar .title {
        color: #fff !important;
        font-weight: 700;
      }

      .VPNavBar .VPLink.link:hover {
        background: rgba(255,255,255,0.15) !important;
      }

      /* 侧边栏科技蓝 */
      .VPSidebar {
        background: #f8fafc !important;
      }

      .VPSidebarItem.is-active > .item > .link {
        color: #2563eb !important;
        font-weight: 600;
      }

      .VPSidebarItem .link:hover {
        color: #2563eb !important;
      }

      /* 按钮科技蓝 */
      .VPButton.brand {
        background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        border: none;
      }

      .VPButton.brand:hover {
        background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
      }

      /* 底部科技蓝 */
      .VPFooter {
        background: linear-gradient(90deg, #1e40af 0%, #2563eb 100%);
        color: #fff;
      }

      /* 代码块科技蓝 */
      .vp-doc div[class*='language-'] {
        border: 1px solid rgba(37, 99, 235, 0.2);
      }

      /* 链接科技蓝 */
      .vp-doc a {
        color: #2563eb;
      }

      .vp-doc a:hover {
        color: #3b82f6;
      }

      /* 深色模式适配 */
      [data-theme="dark"] {
        --vp-c-brand: #3b82f6;
        --vp-c-brand-light: #60a5fa;
        --vp-c-brand-dark: #2563eb;
      }

      [data-theme="dark"] .VPNavBar {
        background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%) !important;
      }

      [data-theme="dark"] .VPSidebar {
        background: #0f172a !important;
      }

      [data-theme="dark"] .VPFooter {
        background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
      }
    `]
  ],
  themeConfig: {
    logo: false,
    nav: [
      { text: "主页", link: "/" },
      {
        text: "AI",
        link: "/ai/",
      },
      {
        text: "产品",
        items: [
          { text: "ESP32系列", link: "/esp32/" },
          { text: "树莓派系列", link: "/raspberrypi/" },
          { text: "Arduino系列", link: "/arduino/" },
          { text: "STM32系列", link: "/stm32/" },
          { text: "航模DIY系列", link: "/hobby/" },
          { text: "显示模块系列", link: "/display/" },
          { text: "电子模块", link: "/electronics/" },
          { text: "客制化键盘系列", link: "/keyboard/" },
          { text: "其他开发板", link: "/other-boards/" },
          { text: "下载器", link: "/programmers/" },
          { text: "DIY电源模块", link: "/power/" },
        ],
      },
      {
        text: "资料下载",
        items: [
          { text: "GitHub", link: "https://github.com/walikechuang" },
          { text: "Gitee", link: "https://gitee.com/walikechuang" },
          { text: "网盘资料", link: "/downloads/cloud/" },
          { text: "星智固件下载", link: "/downloads/firmware/" },
        ],
      },
      {
        text: "购买",
        items: [
          { text: "淘宝", link: "https://shop.taobao.com" },
          { text: "速卖通", link: "https://www.aliexpress.com" },
        ],
      },
      { text: "联系我们", link: "/contact/" },
      { text: "社区", link: "/community/" },
    ],

    sidebar: {
      "/ai/": [
        {
          text: "AI产品",
          items: [
            { text: "0.85寸 AI对话聊天机器人", link: "/ai/085-ai-chatbot" },
            { text: "0.96/1.54 AI对话聊天机器人", link: "/ai/096-154-ai-chatbot" },
            { text: "ESP32S3 小智AI", link: "/ai/esp32s3-xiaozhi" },
            { text: "小智AI", link: "/ai/xiaozhi-ai" },
            { text: "AI音箱2.0", link: "/ai/ai-speaker" },
            { text: "Matrixbitv3.0 AI教育开发板", link: "/ai/matrixbit" },
            { text: "AI玩具盒", link: "/ai/ai-toy-box" },
          ],
        },
      ],
      "/esp32/": [
        {
          text: "ESP32系列",
          items: [
            { text: "ESP32-S3", link: "/esp32/esp32-s3" },
            { text: "ESP32-C3", link: "/esp32/esp32-c3" },
            { text: "ESP32-C6", link: "/esp32/esp32-c6" },
            { text: "ESP32-S2", link: "/esp32/esp32-s2" },
          ],
        },
      ],
      "/arduino/": [
        {
          text: "Arduino系列",
          items: [
            { text: "Arduino Uno", link: "/arduino/arduino-uno" },
            { text: "Arduino Nano", link: "/arduino/arduino-nano" },
            { text: "Arduino Pro Mini", link: "/arduino/arduino-pro-mini" },
            { text: "Arduino Mega", link: "/arduino/arduino-mega" },
            { text: "Arduino Leonardo", link: "/arduino/arduino-leonardo" },
            { text: "Arduino MKR", link: "/arduino/arduino-mkr" },
          ],
        },
      ],
      "/stm32/": [
        {
          text: "STM32系列",
          items: [
            { text: "STM32F103", link: "/stm32/stm32f103" },
            { text: "STM32F401", link: "/stm32/stm32f401" },
            { text: "STM32F411", link: "/stm32/stm32f411" },
            { text: "STM32G431", link: "/stm32/stm32g431" },
            { text: "STM32H743", link: "/stm32/stm32h743" },
          ],
        },
      ],
      "/raspberrypi/": [
        {
          text: "树莓派系列",
          items: [
            { text: "Raspberry Pi 5", link: "/raspberrypi/rpi5" },
            { text: "Raspberry Pi 4B", link: "/raspberrypi/rpi4" },
            { text: "Raspberry Pi Zero 2", link: "/raspberrypi/zero2" },
            { text: "Raspberry Pi Pico", link: "/raspberrypi/pico" },
          ],
        },
      ],
      "/hobby/": [
        {
          text: "航模DIY系列",
          items: [
            { text: "机身框架", link: "/hobby/frame" },
            { text: "电机", link: "/hobby/motor" },
            { text: "飞控", link: "/hobby/flight-controller" },
            { text: "接收机", link: "/hobby/receiver" },
            { text: "遥控器", link: "/hobby/remote" },
            { text: "图传", link: "/hobby/vtx" },
            { text: "螺旋桨", link: "/hobby/propeller" },
          ],
        },
      ],
      "/display/": [
        {
          text: "显示模块系列",
          items: [
            { text: "0.96寸 OLED", link: "/display/096-oled" },
            { text: "1.3寸 IPS", link: "/display/13-ips" },
            { text: "1.54寸 E-Paper", link: "/display/154-epaper" },
            { text: "2.4寸 TFT", link: "/display/24-tft" },
            { text: "2.8寸 TFT触屏", link: "/display/28-tft-touch" },
            { text: "3.5寸 TFT触屏", link: "/display/35-tft-touch" },
            { text: "5寸 TFT触屏", link: "/display/50-tft-touch" },
            { text: "7寸 TFT触屏", link: "/display/70-tft-touch" },
          ],
        },
      ],
      "/electronics/": [
        {
          text: "电子模块",
          items: [
            { text: "传感器模块", link: "/electronics/sensors" },
            { text: "驱动模块", link: "/electronics/drivers" },
            { text: "通信模块", link: "/electronics/communication" },
            { text: "电源模块", link: "/electronics/power-supply" },
            { text: "存储模块", link: "/electronics/storage" },
            { text: "音频模块", link: "/electronics/audio" },
          ],
        },
      ],
      "/keyboard/": [
        {
          text: "客制化键盘系列",
          items: [
            { text: "键盘主控板", link: "/keyboard/controller" },
            { text: "底座功能板", link: "/keyboard/base-board" },
            { text: "按键", link: "/keyboard/switches" },
            { text: "键帽", link: "/keyboard/keycaps" },
            { text: "CNC外壳", link: "/keyboard/cnc-case" },
          ],
        },
      ],
      "/power/": [
        {
          text: "DIY电源模块",
          items: [
            { text: "3.7V 1S 18650", link: "/power/37v-1s-18650" },
            { text: "3.7V 2S 18650", link: "/power/37v-2s-18650" },
            { text: "3.7V 3S 18650", link: "/power/37v-3s-18650" },
            { text: "7.4V 2S 14500", link: "/power/74v-2s-14500" },
            { text: "7.4V 2S 18650", link: "/power/74v-2s-18650" },
            { text: "7.4V 18650 UPS", link: "/power/74v-18650-ups" },
            { text: "11.1V 18650", link: "/power/111v-18650" },
          ],
        },
      ],
      "/other-boards/": [
        {
          text: "其他开发板",
          items: [
            { text: "CH32V2003", link: "/other-boards/ch32v2003" },
            { text: "CH571F", link: "/other-boards/ch571f" },
            { text: "CH573F", link: "/other-boards/ch573f" },
            { text: "CH582F", link: "/other-boards/ch582f" },
            { text: "CH552T", link: "/other-boards/ch552t" },
          ],
        },
      ],
    },

    footer: {
      message: "Copyright © 2026 瓦力科创",
      copyright: "瓦力科创 | DIY军火库，万物皆可ZAO",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/walikechuang" },
    ],

    editLink: false,
    lastUpdated: false,
  },

  markdown: {
    lineNumbers: false,
  },
})
