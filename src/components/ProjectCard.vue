<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ project.name }}</li>
            <li class="list-group-item">{{ project.author }}</li>
            <li v-if="project.completion_date" class="list-group-item">{{ project.completion_date }}</li>
            <li v-if="project.type" class="list-group-item">{{ project.type.label }}</li>
            <li v-if="project.technologies" class="list-group-item">
                <span v-for="technology in project.technologies" :key="technology.id" class="me-3">{{ technology.label
                }}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>