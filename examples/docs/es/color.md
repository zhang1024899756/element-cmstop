<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import { ACTION_USER_CONFIG_UPDATE } from '../../components/theme/constant.js';
  const varMap = {
    'primary': '$--color-primary',
    'success': '$--color-success',
    'warning': '$--color-warning',
    'danger': '$--color-danger',
    'info': '$--color-info',
    'white': '$--color-white',
    'black': '$--color-black',
    'textPrimary': '$--color-text-primary',
    'textRegular': '$--color-text-regular',
    'textSecondary': '$--color-text-secondary',
    'textPlaceholder': '$--color-text-placeholder',
    'borderBase': '$--border-color-base',
    'borderLight': '$--border-color-light',
    'borderLighter': '$--border-color-lighter',
    'borderExtraLight': '$--border-color-extra-light'
  };
  const original = {
    primary: '#4886FF',
    success: '#00B42A',
    warning: '#FF7D00',
    danger: '#F53F3F',
    info: '#86909C',
    white: '#FFFFFF',
    black: '#000000',
    textPrimary: '#1D2129',
    textRegular: '#4E5969',
    textSecondary: '#86909C',
    textPlaceholder: '#C9CDD4',
    borderBase: '#DCDFE6',
    borderLight: '#E4E7ED',
    borderLighter: '#EBEEF5',
    borderExtraLight: '#F2F3F5'
  }
  export default {
    created() {
      bus.$on(ACTION_USER_CONFIG_UPDATE, this.setGlobal);
    },
    mounted() {
      this.setGlobal();
    },
    methods: {
      tintColor(color, tint) {
        return tintColor(color, tint);
      },
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global;
        }
      }
    },
    data() {
      return {
        global: {},
        primary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
        white: '',
        black: '',
        textPrimary: '',
        textRegular: '',
        textSecondary: '',
        textPlaceholder: '',
        borderBase: '',
        borderLight: '',
        borderLighter: '',
        borderExtraLight: ''
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          Object.keys(original).forEach((o) => {
            if (value[varMap[o]]) {
              this[o] = value[varMap[o]]
            } else {
              this[o] = original[o]
            }
          });
        }
      }
    },
  }
</script>

## Color
Cmstop utiliza un conjunto de paletas para especificar colores, y así, proporcionar una apariencia y sensación coherente para los productos que construye.

### Color principal

El color principal de Cmstop es el azul brillante y amigable.

<el-row :gutter="12">
  <el-col :span="10" :xs="{span: 12}">
    <div 
      class="demo-color-box"
      :style="{ background: primary }"
    >
      Brand Color<div class="value">#4886FF</div>
    <div 
      class="bg-color-sub"
      :style="{ background: tintColor(primary, 0.9) }"
    >
    <div 
      class="bg-blue-sub-item" 
      v-for="(item, key) in Array(8)"
      :key="key"
      :style="{ background: tintColor(primary, (key + 1) / 10) }"
        >
    </div>
    </div>
    </div>
  </el-col>
</el-row>

### Color secundario

Además del color principal, se necesitan utilizar distintos colores para diferentes escenarios (por ejemplo, el color en tono rojo indica una operación peligrosa).

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: success }"
    >Success<div class="value">#00B42A</div>
      <div 
        class="bg-color-sub"
      >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(success, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: warning }"
    >Warning<div class="value">#FF7D00</div>
      <div 
          class="bg-color-sub"
        >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(warning, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: danger }"
    >Danger<div class="value">#F53F3F</div>
      <div 
          class="bg-color-sub"
        >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(danger, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: info }"
    >Info<div class="value">#86909C</div>
      <div 
          class="bg-color-sub"
        >
        <div 
          class="bg-success-sub-item" 
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(info, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
</el-row>

### Color neutro

Los colores neutrales son para texto, fondos y bordes. Puede usar diferentes colores neutrales para representar una estructura jerárquica.

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textPrimary }"
      >Texto primario<div class="value">{{textPrimary}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textRegular }"
      >
      Texto regular<div class="value">{{textRegular}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textSecondary }"
      >Texto secundario<div class="value">{{textSecondary}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textPlaceholder }"
      >Texto de placeholder<div class="value">{{textPlaceholder}}</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderBase }"
      >Borde base<div class="value">{{borderBase}}</div></div>
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderLight }"
      >Borde ligero<div class="value">{{borderLight}}</div></div>
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderLighter }"
      >Borde claro<div class="value">{{borderLighter}}</div></div>
      <div class="demo-color-box demo-color-box-other demo-color-box-lite"
      :style="{ background: borderExtraLight }"
      >Borde extra claro<div class="value">{{borderExtraLight}}</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div 
      class="demo-color-box demo-color-box-other"
      :style="{ background: black }"
      >Basic Black<div class="value">{{black}}</div></div>
      <div
      class="demo-color-box demo-color-box-other"
      :style="{ background: white, color: '#1D2129', border: '1px solid #eee' }"
      >Basic White<div class="value">{{white}}</div></div>
      <div class="demo-color-box demo-color-box-other bg-transparent">Transparent<div class="value">Transparent</div>
      </div>
    </div>
  </el-col>
</el-row>
