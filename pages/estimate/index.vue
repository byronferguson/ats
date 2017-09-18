<template>
<div>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-centered hero-title">Estimate</h1>
      </div>
    </div>
  </section>

  <section class="section">
      <div class="box has-text-centered">
        This tool is intended to provide a rough estimate of the requested products and services you may require.
      </div>
  </section>

  <section class="section">
    <article class="container">

      <template v-if="createRegion">
        <b-field label="Region Name" message="Descriptive name of region">
          <b-input v-model="region.name" placeholder="East flowerbed" />
        </b-field>

        <b-field label="Length" message="Length of the region">
          <b-field>
            <b-input v-model="region.x.size" expanded />
            <b-select v-model="region.x.unit">
              <option v-for="unit in units" :value="unit" :key="unit">{{ unit }}</option>
            </b-select>
          </b-field>
        </b-field>

        <b-field label="Width" message="Width of the region">
          <b-field>
            <b-input v-model="region.y.size" expanded />
            <b-select v-model="region.y.unit">
              <option v-for="unit in units" :value="unit" :key="unit">{{ unit }}</option>
            </b-select>
          </b-field>
        </b-field>

        <b-field label="Depth" message="Required depth of the region">
          <b-field>
            <b-input v-model="region.z.size" expanded />
            <b-select v-model="region.z.unit">
              <option v-for="unit in units" :value="unit" :key="unit">{{ unit }}</option>
            </b-select>
          </b-field>
        </b-field>

        <b-field label="Product">
          <b-select v-model="region.product.name" placeholder="Select a product" expanded>
              <template v-for="product in products">
                <optgroup :label="product.type" :key="product.type">
                  <template v-for="option in product.options">
                    <option :value="option.name" :key="option.name">{{ option.name }}</option>
                  </template>
                </optgroup>
              </template>
          </b-select>
      </b-field>

        <button class="button is-success" @click="test">
          <span class="icon"><i class="fa fa-plus" /></span>
          <span>Add Region</span>
        </button>
      </template>

      <template v-else>
        <button class="button is-success" @click="toggleCreateRegion">
          <span class="icon"><i class="fa fa-plus" /></span>
          <span>New Region</span>
        </button>
      </template>

      <template v-if="regions.length">
        <b-table
          :data="regions"
          :bordered="true"
          :striped="true"
          :narrowed="false"
          :checkable="true"
          :loading="false"
          :mobile-cards="true"
          :selected.sync="selected"
          :checked-rows.sync="checkedRows">

          <template scope="props">
            <b-table-column field="name" label="Region Name" sortable>
                {{ props.row.name }}
            </b-table-column>

            <b-table-column field="x.size" label="Length" sortable>
                {{ props.row.x.size }} {{ props.row.x.unit }}
            </b-table-column>

            <b-table-column field="y.size" label="Width" sortable>
                {{ props.row.y.size }} {{ props.row.y.unit }}
            </b-table-column>

            <b-table-column field="z.size" label="Depth" sortable>
                {{ props.row.z.size }} {{ props.row.z.unit }}
            </b-table-column>

            <b-table-column field="volume" label="Volume" sortable>
                {{ props.row.volume.toFixed(2) }} yd<sup>3</sup>
            </b-table-column>
          </template>

          <div slot="empty" class="has-text-centered">
              This table is empty!
          </div>
        </b-table>

        <b-field label="Volume">
          <b-field>
            <b-input v-model="totalVolume" readonly />
          </b-field>
        </b-field>
      </template>
      
    </article>
  </section>

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    createRegion: false,
    units: [
      'in', 'ft', 'yd'
    ],
    selected: {},
    checkedRows: [],
    region: {
      name: '',
      x: {
        size: 0,
        unit: 'ft'
      },
      y: {
        size: 0,
        unit: 'ft'
      },
      z: {
        size: 0,
        unit: 'in'
      },
      product: {
        type: '',
        name: '',
        price: 0
      },
      volume: 0,
      total: 0
    }
  }),
  computed: {
    ...mapGetters([
      'products',
      'regions'
    ]),
    totalVolume () {
      return this.region.x.size * this.region.y.size * this.region.z.size
    }
  },
  methods: {
    ...mapActions([
      'addRegion'
    ]),
    test () {
      console.log(this.region, 'region')
    },
    toggleCreateRegion () {
      this.createRegion = true
    },
    resetRect () {
      this.region = {
        name: '',
        x: {
          size: 0,
          unit: 'ft'
        },
        y: {
          size: 0,
          unit: 'ft'
        },
        z: {
          size: 0,
          unit: 'in'
        },
        volume: 0
      }
    },
    addRegion () {
      this.region.volume = this.calcVolume(this.region)
      this.regions.push(this.region)
      this.resetRect()
      this.addRegion = false
    },
    convertToInches (measure) {
      let newMeasure = {
        size: 0,
        unit: ''
      }

      switch (measure.unit) {
        case 'in':
          newMeasure.size = measure.size * 1
          break
        case 'ft':
          newMeasure.size = measure.size * 12
          break
        case 'yd':
          newMeasure.size = measure.size * 36
          break
      }

      newMeasure.unit = 'in'

      return newMeasure
    },
    convertCubicInchesToCubicYards (cubicInch) {
      const conversion = 46656
      return cubicInch / conversion
    },
    calcVolume (region) {
      let x = this.convertToInches(region.x).size
      let y = this.convertToInches(region.y).size
      let z = this.convertToInches(region.z).size
      let volumeInInches = x * y * z
      return this.convertCubicInchesToCubicYards(volumeInInches)
    }
  }
}
</script>

<style scope>
</style>