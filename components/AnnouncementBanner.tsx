interface AnnouncementBannerProps {
  announcement: string
}

export default function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  return (
    <div className="bg-accent text-white py-3 px-4 text-center relative">
      <div 
        className="font-medium text-sm md:text-base"
        dangerouslySetInnerHTML={{ __html: announcement }}
      />
    </div>
  )
}