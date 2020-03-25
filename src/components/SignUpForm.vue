<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-row>
          <h3>Selected Event</h3><br>
        </v-row>
        <v-row>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</p>
          </div>
        </v-row>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-spacer />
      <v-btn
        rounded
        color="primary"
        dark
      >
        Submit Signup
      </v-btn>
      <v-spacer />
    </v-row>
  </v-form>
</template>

<script>
export default {

}
</script>
