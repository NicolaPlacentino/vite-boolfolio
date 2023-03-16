<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';
export default {
    name: 'HomePage',
    components: { ProjectCard },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => { this.projects = res.data })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col p-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome progetto</th>
                            <th scope="col">Data di completamento</th>
                            <th scope="col">Tipologia</th>
                            <th scope="col">Tecnologie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="project in projects" :key="project.id">
                            <td>{{ project.name }}</td>
                            <td>{{ project.completion_date }}</td>
                            <td><b v-if="project.type" class="rounded d-inline-block px-2 p-1 mt-1">{{ project.type.label
                            }}</b></td>
                            <td>
                                <b v-if="project.technologies" v-for="technology in project.technologies"
                                    :key="technology.id" class="rounded d-inline-block px-2 p-1 mt-1">{{ technology.label
                                    }}</b>
                            </td>
                            <td class="text-end">
                                <router-link :to="{ name: 'show', params: { id: project.id } }"
                                    class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
