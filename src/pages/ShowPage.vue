<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';
export default {
    name: 'ShowPage',
    components: { ProjectCard },
    data() {
        return {
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(apiBaseUrl + 'projects/' + this.$route.params.id).then(res => { this.project = res.data })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto p-5">
                <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>
        <div class="text-center">
            <router-link to="/" class="btn btn-secondary">Torna alla home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
