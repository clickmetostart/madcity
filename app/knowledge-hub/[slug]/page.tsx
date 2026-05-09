import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import styles from './page.module.css';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | MadCity Home Loans',
    };
  }

  return {
    title: `${post.title} | MadCity Home Loans`,
    description: post.description,
  };
}

export default function Post({ params }: Props) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.postPage}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className="container">
            <Link href="/knowledge-hub" className={styles.backLink}>
              ← Back to Knowledge Hub
            </Link>
            <div className={styles.meta}>
              <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span className={styles.author}>By Rob Miller</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </div>
        </header>

        <div className="container">
          <div className={styles.contentWrapper}>
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </div>
      </article>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to take the next step?</h2>
            <p>Get personalized advice from Rob Miller and the MadCity Home Loans team.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
              <Link href="https://provisor.shapeportal.com/ref/34" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Apply Online Now</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
