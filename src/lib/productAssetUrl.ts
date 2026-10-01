// The asset paths resolve on the hosted site; use its public origin so they also load in local previews.
export const productAssetUrl = (asset: { url: string }) =>
  new URL(asset.url, "https://color-splash-ujenzi-modern.lovable.app").href;