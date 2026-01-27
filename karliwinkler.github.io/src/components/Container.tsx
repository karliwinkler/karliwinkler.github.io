export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto max-w-6xl px-6 text-dkgreen font-epilogue">
            {children}
        </div>
    );
}

export default Container;