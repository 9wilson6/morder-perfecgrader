
import { PropsWithChildren } from 'react';

export default function Mini({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
    return (
        <section className={`bg-gray-100 dark:bg-gray-900 overflow-hidden flex items-center relative ${className || "min:h-[100vh]"}`}>
                <div
                    className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50"
                />
                <div
                    className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50"
                />
                <div
                    className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0"
                >
                    <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
                        <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
                    </div>
                </div>
                <div
                    className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0"
                >
                    <div className="inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
                        <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
                    </div>
                </div>
                <div className="mx-auto pt-20 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    {children}
                </div>
            </section>
    );
}
