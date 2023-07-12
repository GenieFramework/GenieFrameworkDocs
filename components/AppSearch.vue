<script setup lang="ts">
</script>

<template>
    <div id="docsearch" class="docsearch" style="display:block">
    </div>
</template>

<style>
.docsearch {
    background: white;
    margin-left: 10px;
}

#docsearch {
    display: block;
    transform: scale(0.7)
}

#docsearch>button {

    background: white;
    border-style: solid;
    border-radius: 15px;
    border-width: 1px;
    border-color: lightgrey;
    font-size: 6px;
    padding: 4px;
}

#docsearch .DocSearch-Search-Icon {
    transform: scale(0.7)
}

#docsearch>button>span.DocSearch-Button-Keys {
    font-size: 15px
}

/* css({ */
/*   '.docsearch': { */
/*     '&:hover': { */
/*       button: { */
/*         borderColor: '{color.gray.300}' */
/*       } */
/*     }, */
/*     button: { */
/*       padding: '{space.2} {space.4}', */
/*       '.content': { */
/*         borderRadius: '{radii.md}', */
/*         display: 'flex', */
/*         alignItems: 'center', */
/*         color: '{color.gray.500}', */
/*         borderStyle: 'solid', */
/*         borderWidth: '1px', */
/*         borderColor: '{color.gray.100}', */
/*         fontSize: '{fontSize.xs}', */
/*         gap: '{space.2}', */
/*         padding: '{space.rem.375}', */
/*         '@dark': { */
/*           color: '{color.gray.400}', */
/*           borderColor: '{color.gray.900}', */
/*         }, */
/*         '&:hover': { */
/*           color: '{color.gray.700}', */
/*           borderColor: '{color.gray.400}', */
/*           '@dark': { */
/*             color: '{color.gray.200}', */
/*             borderColor: '{color.gray.700}', */
/*           } */
/*         }, */
/*         span: { */
/*           '&:first-child': { */
/*             display: 'block', */
/*             fontSize: '{fontSize.xs}', */
/*             fontWeight: '{fontWeight.medium}', */
/*           }, */
/*           '&:nth-child(2)': { */
/*             flex: 'none', */
/*             display: 'none', */
/*             fontSize: '{fontSize.xs}', */
/*             fontWeight: '{fontWeight.semibold}', */
/*             '@sm': { */
/*               display: 'block' */
/*             } */
/*           } */
/*         } */
/*       } */
/*     }, */
/**/
/*   } */
/* }) */
</style>
