<template>
  <v-container
    width="100%"
    class="mb-12"
  >
    <v-row :class="mb-12">
      <v-col :class="mb-12">
        <v-card>
          <v-img
            height="100"
            :aspect-ratio="16/9"
            src="../../../src/assets/1A5A6F60-8768-49A6-9CBA-B6E973438DB9.jpeg"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row :class="mb-12">
      <v-col :class="xs-12">
        <v-card>
          <v-card-text>Select one or more areas which you would like to volunteer</v-card-text>
          <v-treeview
            v-model="tree"
            selectable
            selected-color="green"
            :items="items"
            item-key="name"
            @update:select:="updateTree"
          />
        </v-card>
      </v-col>
      <v-col :class="xs-12">
        <v-card>
          <div>
            <h1 class="pl-6 pt-3">
              Volunteer
            </h1>
          </div>
          <v-col>
            <v-text-field
              v-model="form.name"
              value
              placeholder="Enter Full Name Here"
              label="*Full Name"
              filled
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="form.email"
              value
              placeholder="fledgevolunteer@thefledge.com"
              label="*Email"
              filled
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="form.notes"
              value
              placeholder="Any Additional Notes for the Organizer"
              label="Notes"
              filled
            />
          </v-col>
          <v-col>
            <div>
              <div
                v-if="!canSubmit()"
              >
                Fill in the form and Select at least one Volunteering Opportunity
              </div>
              <div v-else>
                Ready to submit
              </div>
              <v-btn
                :disabled="!canSubmit()"
                large
                color="primary"
                @click="submit"
              >
                Sign-Up!
              </v-btn>
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

function fakeItems () {
  return [
    {
      id: 1,
      name: 'Voluneteer 1',
      children: [
        {
          id: 1.1,
          name: 'Volunteer 1.1'
        },
        {
          id: 1.2,
          name: 'Volunteer 1.2'
        }
      ]
    },
    {
      id: 2,
      name: 'Voluneteer 2'
    },
    {
      id: 3,
      name: 'Voluneteer 3'
    }
  ]
}

export default {
  props: {
    getTaskPath: {
      type: String,
      required: true
      }
  },
  data: () => ({
    items: [],
    tree: [],
    form: {
      name: '',
      email: '',
      notes: '',
      selected: ''
    }
  }),
  computed: {
    filter () {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    }
  },
  mounted() {
    this.$http.get(this.getTaskPath).then(
      () => {
        this.items = fakeItems()
      },
      () => {
        this.items = fakeItems()
      }
    )
  },
  methods: {
    canSubmit: function () {
      return (
        this.form.name !== '' &&
        this.form.email !== '' &&
        this.tree !== null &&
        this.tree.length > 0
      )
    },
    submit: function () {
      window.alert(this.form.name + ' Applied to volunteer ' + this.tree)
    },
    updateTree: function () {
      window.alert(this.active)
    }
  }
}
</script>
