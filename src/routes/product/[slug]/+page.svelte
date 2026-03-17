<script>
    let { data } = $props();
</script>

<svelte:head>
 <title>Nikos Electronic Webshop - {data?.product?.name ?? 'Product'}</title>
 <meta
  name="description"
  content={data?.product?.description ?? 'Product details'}
 />
 <meta property="og:title" content={`Electronic Devices Webshop - ${data?.product?.name ?? 'Product'}`} />
 <meta property="og:image" content={data?.product?.image_url ?? ''} />
</svelte:head>

<h1 class="text-5xl text-center my-32">
    Product Details
</h1>

<h2 class="text-3xl font-bold text-center mb-8">{data?.product?.name ?? 'Product not found'}</h2>