/** @module mm-quasi-static-cache
 * 
 * A koa module for caching quasi-static pages. It
 * stores ctx.body and ctx.headers against the inbound url.
 * It does a deep compare of a control object and the state of
 * that control object when the cache was stored. If they are
 * different then the cache is cleared otherwise ctx.body and
 * ctx.header are restored.
 * 
 * The cache is always reset on startup.
 * 
 * usage:
 *    //in the main app middleware before any routes
 *    app.use( require('mm-quasi-static-cache').init({folder: "/cache", folder_wipe:true}) )
 * 
 *    //in your page code
 *    let stat = fs.statSynch("page-that-is-hard-to-render.template")
 *    let view = fetch_view( complex_metadata_db )
 *    let obj = {stat:stat, obj:obj}
 *    if( ctx.mm_quasi_static_cache.hit( ctx.request.originalUrl, obj )){
 *       //Yay we don't have to re-render the page and saved some AWS dollars
 *       ctx.status= 200
 *       return
 *    }
 *    // Do a ton of work to render ctx.body and ctx.response.headers
 *    // ...
 *    // update the cache
 *    ctx.mm_quasi_static_cache.put( ctx.request.originalUrl, obj )
 */