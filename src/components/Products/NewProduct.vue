<template>
    <v-container>
        <v-loyout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary vb-3">Create New Product</h1>
                <v-form ref="form" v-model="valid" lazy-validation>
               <v-text-field 
               name="title" 
               label="Title" 
               type="text"
               required=""
               :rules="[v => !!v || 'Title is requare']"
               v-model="title"
               ></v-text-field>
                    <v-text-field 
                    name="vendor" 
                    label="Vendor Product" 
                    type="text"
                    v-model="vendor"
                    ></v-text-field>
                        <v-text-field 
                        name="color" 
                        label="Color Product" 
                        type="text"
                        v-model="color"
                        ></v-text-field>
                            <v-text-field 
                            name="material" 
                            label="Material Product" 
                            type="text"
                            v-model="material"
                            ></v-text-field>
                                    <v-text-field 
                                name="price" 
                                label="Price Product" 
                                type="text"
                                :rules="[v => !!v || 'Pitle is requare']"
                                required
                                v-model="Price"
                                ></v-text-field>    
                                    <v-text-field 
                                    name="description" 
                                    label="Description Product" 
                                    type="text"
                                    v-model="description"
                                    ></v-text-field>
                                    </v-form>
                                <v-layout class="mb-3">
                                    <v-flex xs12>
                                        <v-btn class="warning">
                                            Upload
                                            <v-icon right dark>cloud_upload</v-icon>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12>
                                       <img src="" height="200px">
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12>
                                       <v-switch
                                       color="primary"
                                       label="Add to Promo?"
                                       v-model="promo"
                                       ></v-switch>
                                    </v-flex>
                                </v-layout>
            </v-flex>
        </v-loyout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>