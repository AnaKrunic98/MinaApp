<template>
    <div>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/MoodForm">Mood Form</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <div>
        <slot />
    </div>
</div>
</template>

<style scoped>
.router-link-exact-active {
        color: #12b488;
}
a{
    text-decoration: none;
}
ul{
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    background-color: #dedede;
}
li{
    margin: 10px;
}



</style>