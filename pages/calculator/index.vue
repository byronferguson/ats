<template>
<div>
  <h1>Calculator</h1>

  <b-field label="Region Name" message="Descriptive name of region">
    <b-input v-model="rectangle.name" placeholder="East flowerbed" />
  </b-field>

  <b-field label="Length" message="Length of the region">
    <b-field>
      <b-input v-model="rectangle.x.size" />
      <b-select v-model="rectangle.x.unit">
        <option v-for="unit in units" :value="unit" :key="unit">{{ unit }}</option>
      </b-select>
    </b-field>
  </b-field>

  <b-field label="Width" message="Width of the region">
    <b-field>
      <b-input v-model="rectangle.y.size" />
      <b-select v-model="rectangle.y.unit">
        <option v-for="unit in units" :value="unit" :key="unit">{{ unit }}</option>
      </b-select>
    </b-field>
  </b-field>

  <b-field label="Depth" message="Required depth of the region">
    <b-field>
      <b-input v-model="rectangle.z.size" />
      <b-select v-model="rectangle.z.unit">
        <option v-for="unit in units" :value="unit" :key="unit">{{ unit }}</option>
      </b-select>
    </b-field>
  </b-field>

  <button class="button is-primary" @click="addRect">Add Region</button>

  <b-table
    :data="rectangles"
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
            {{ props.row.volume }} yd<sup>3</sup>
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

</div>
</template>

<script>
export default {
  data: () => ({
    units: [
      'in', 'ft', 'yd'
    ],
    selected: {},
    checkedRows: [],
    rectangles: [],
    rectangle: {
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
  }),
  computed: {
    totalVolume () {
      return this.rectangle.x.size * this.rectangle.y.size * this.rectangle.z.size
    }
  },
  methods: {
    resetRect () {
      this.rectangle = {
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
    addRect () {
      this.rectangle.volume = this.calcVolume(this.rectangle)
      this.rectangles.push(this.rectangle)
      this.resetRect()
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

      console.log(newMeasure, 'newMeasure')
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