<template>
    <div class="row">
        <div class="column">
            <ContentSlot :use="$slots.firstcol" unwrap="p">
                Card title
            </ContentSlot>
        </div>
        <div class="column">
            <ContentSlot :use="$slots.secondcol" unwrap="p">
            </ContentSlot>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
    float: left;
    width: 50%;
    padding: 10px;
    /* height: 300px; */
    /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        width: 100%;
    }
}
</style>
