<?php
/**
 * Title: Recipe Cards
 * Slug: chef-kiss/recipe-cards
 * Description: Displays the recipes
 * Keywords: query
 * Block Types: core/query
 */

?>
<!-- wp:query {"queryId":10,"query":{"perPage":50,"pages":0,"offset":0,"postType":"recipe","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"parents":[],"meta_query":{}},"namespace":"advanced-query-loop"} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"grid", "columnCount": 2}} -->
<!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"blockGap":{"top":"0","left":"0"}},"border":{"width":"0px","style":"none","radius":"8px"}},"backgroundColor":"white"} -->
<div class="wp-block-columns are-vertically-aligned-center has-white-background-color has-background" style="border-style:none;border-width:0px;border-radius:8px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:column {"verticalAlignment":"center","width":"25%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:25%"><!-- wp:post-featured-image {"isLink":true,"aspectRatio":"1","style":{"border":{"radius":{"topLeft":"8px","topRight":"0px","bottomLeft":"8px","bottomRight":"0px"}}}} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"75%","style":{"spacing":{"padding":{"right":"2rem","left":"2rem"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:2rem;padding-left:2rem;flex-basis:75%"><!-- wp:post-title {"isLink":true} /-->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"0","bottom":"var:preset|spacing|40"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:var(--wp--preset--spacing--40);padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:chef-kiss/level /-->

<!-- wp:chef-kiss/cooking-time /--></div>
<!-- /wp:group -->

<!-- wp:post-excerpt {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"0","bottom":"0"}}}} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
<!-- /wp:post-template --></div>
<!-- /wp:query -->
