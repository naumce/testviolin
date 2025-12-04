import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { notFound } from 'next/navigation'
import { getTeacherBySlug } from '@/data/teachers'
import TeacherProfileClient from './TeacherProfileClient'

export default async function TeacherProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const teacher = getTeacherBySlug(slug)
  
  if (!teacher) {
    notFound()
  }

  return (
    <>
      <Header />
      <TeacherProfileClient teacher={teacher} />
      <Footer />
    </>
  )
}
