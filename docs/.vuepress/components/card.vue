<template>
    <div class='business-card'>
        <div class='card-headpic'>
            <img src='/logo/logo.png'>
        </div>
        <div>
            <span>
                CHICAGO
            </span>
            <span>
                前端仔的自我挣扎
            </span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.business-card {
    position: relative;
    height:300px;
    width:300px;
}
.card-headpic{
    height: 100px;
    width: 100px;
    position: absolute;
    top:-20px;
    left:-10px;
}
</style>