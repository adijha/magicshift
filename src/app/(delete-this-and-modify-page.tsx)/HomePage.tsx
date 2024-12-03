import Image from 'next/image';

const HomePage: React.FC = () => {
    return (
        <main className='mx-auto mt-6 flex max-w-7xl flex-col justify-center gap-6 px-3 font-[family-name:var(--font-geist-sans)] sm:mt-3 sm:gap-12 sm:px-0'>
            <div className='justify-centersm:items-start row-start-2 flex flex-col items-center gap-8'>
                <div className='flex items-center gap-4'>
                    <h2 className='text-3xl font-bold'>
                        MagicSell<span className='text-red-500'>.ai</span>
                    </h2>
                </div>
                <ol className='list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left'>
                    <li className='mb-2'>
                        Get started by editing{' '}
                        <code className='rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]'>
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <h2 className='text-3xl font-bold'>
                    MagicShift<span className='text-red-500'>.io</span>
                </h2>
                <ol className='list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left'>
                    <li className='mb-2'>
                        Get started by editing{' '}
                        <code className='rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]'>
                            src/app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>
                <div className='flex items-center gap-4'>
                    <a
                        className='flex h-10 min-w-40 flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-neutral-200 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 sm:h-12 sm:px-5 sm:text-base'
                        href='https://magicsell.ai'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Image
                            aria-hidden
                            src='https://nextjs.org/icons/globe.svg'
                            alt='Globe icon'
                            width={16}
                            height={16}
                        />
                        <p>

                        MagicSell<span className='text-red-500'>.ai</span>
                        </p>
                    </a>
                    <a
                        className='flex h-10 min-w-40 items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-black/[.08] text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-60 sm:px-5 sm:text-base'
                        href='https://apps.shopify.com/upsell-cross-sell-magicsell'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Image aria-hidden src='/images/shopify.svg' alt='Globe icon' width={16} height={16} />
                        Install App
                    </a>
                </div>
            </div>
            {/* <div className='row-start-3 hidden flex-wrap items-center justify-center gap-6 sm:flex'>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image aria-hidden src='https://nextjs.org/icons/file.svg' alt='File icon' width={16} height={16} />
                    Learn
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/window.svg'
                        alt='Window icon'
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://adijha.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/globe.svg'
                        alt='Globe icon'
                        width={16}
                        height={16}
                    />
                    Go to adijha.com →
                </a>
            </div> */}
        </main>
    );
};

export default HomePage;
