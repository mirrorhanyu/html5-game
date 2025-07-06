export default async function Game({
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ src?: string }>
  }) {
    const { slug } = await params
    const { src } = await searchParams

    return (
      <div>
        <h1>{slug}</h1>
        <iframe 
            src={`${src}`} 
            className="w-214 h-117"
            allow="fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope" />
      </div>
    )
  }