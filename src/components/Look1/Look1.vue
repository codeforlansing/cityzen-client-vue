<template>
  <v-container width="100%" class="d-flex pa-6">
    <v-row class="d-flex">
      <v-col class="col-xs12">
        <v-card>
          <v-card-text>Select one or more areas which you would like to volunteer</v-card-text>
          <v-treeview selectable selected-color="red" :items="items"></v-treeview>
        </v-card>
      </v-col>
      <v-col class="col-xs12">
        <v-card >
          <div>
            <h1 class="pl-6 pt-3">Volunteer</h1>
          </div>
          <v-col>
            <v-text-field value placeholder="Enter Full Name Here" label="Full Name" filled></v-text-field>
          </v-col>
          <v-col>
            <v-text-field value placeholder="fledgevolunteer@thefledge.com" label="Email" filled></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              value
              placeholder="Any Additional Notes for the Organizer"
              label="Notes"
              filled
            ></v-text-field>
          </v-col>
          <v-col>
            <div>
              <v-btn large color="primary">Sign-Up!</v-btn>
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Activism :",
        children: [
          { id: 2, name: "Leader" },
          { id: 3, name: "Organizer" },
          { id: 4, name: "Outreach" }
        ]
      },
      {
        id: 5,
        name: "Maintenence :",
        children: [
          { id: 6, name: "Electrical" },
          { id: 7, name: "Plumbing" },
          { id: 8, name: "Construction" }
        ]
      }
    ]
  })
};
</script>