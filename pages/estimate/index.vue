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
      <div class="box">
        <div class="has-text-centered"><b>This tool is intended to provide a rough estimate of the requested products and services you may require.</b></div>
        <ol>
          <li>Click "New Region" to add a new estimated region to the list</li>
          <li>Complete the form for the new region</li>
          <li>Select the product you wish are filling in the "region"</li>
          <li>Click "Add Region" to add the estimate to your list</li>
        </ol>
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
          <b-select v-model="region.product" placeholder="Select a product" expanded>
              <template v-for="product in products">
                <optgroup :label="product.type" :key="product.type">
                  <template v-for="option in product.options">
                    <option :value="{ type: product.type, name: option.name, price: option.price }" :key="option.name">
                      {{ option.name }} @ ${{ option.price.toFixed(2) }} / cubic yard
                    </option>
                  </template>
                </optgroup>
              </template>
          </b-select>
        </b-field>

        <button class="button is-success" @click="clickAddRegion">
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
          :loading="!regions.length"
          :mobile-cards="true">

          <template scope="props">
            <b-table-column label="ID">
              {{ props.index }}
            </b-table-column>

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

            <b-table-column field="product.name" label="Product" sortable>
              {{ props.row.product.type }} - {{ props.row.product.name }} @ ${{ props.row.product.price.toFixed(2) }} / cubic yard
            </b-table-column>

            <b-table-column field="subTotal" label="Estimate" sortable>
              ${{ props.row.subTotal.toFixed(2) }}
            </b-table-column>

            <b-table-column label="Remove">
              <button class="button is-danger" @click="clickRemoveRegion(props.index)">
                <b-icon icon="times" />
              </button>
            </b-table-column>
            
          </template>

          <div slot="empty" class="has-text-centered">
              This table is empty!
          </div>
        </b-table>

        <b-field grouped position="is-centered">
          <b-field label="Total Volume">
            <b-field>
              <b-input v-model="totalVolume" readonly />
              <p class="control">
                  <span class="button is-static">yd<sup>3</sup></span>
              </p>
            </b-field>
          </b-field>

          <b-field label="Total Cost">
            <b-field>
              <p class="control">
                  <span class="button is-static">$</span>
              </p>
              <b-input v-model="totalPrice" readonly />
            </b-field>
          </b-field>
        </b-field grouped>
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
    region: {}
  }),
  computed: {
    ...mapGetters([
      'products',
      'regions',
      'totalVolume',
      'totalPrice'
    ])
  },
  methods: {
    ...mapActions([
      'addRegion',
      'removeRegion'
    ]),
    toggleCreateRegion () {
      this.createRegion = !this.createRegion
    },
    resetRegion () {
      const baseRegion = {
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
        subTotal: 0
      }

      this.region = { ...baseRegion }
    },
    clickAddRegion () {
      this.region.volume = this.calcVolume(this.region)
      this.region.subTotal = this.region.volume.toFixed(2) * this.region.product.price.toFixed(2)
      this.addRegion(this.region)
      this.resetRegion()
      this.toggleCreateRegion()
    },
    clickRemoveRegion (index) {
      this.removeRegion(index)
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
  },
  created () {
    this.resetRegion()
  }
}
</script>

<style scope>
</style>