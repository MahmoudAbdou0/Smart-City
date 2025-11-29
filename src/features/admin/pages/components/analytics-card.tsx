import React from "react";

function AnalyticsCard({ card }) {
    return (
        <div
            key={card?.id}
            data-slot="card"
            className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-white border-[rgb(209,169,99)]/20 p-6 hover:border-[rgb(209,169,99)]/40 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    {card?.icon}
                </div>
                <span data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-primary/90 bg-green-500/10 text-green-600 border-green-500/20">{card?.growth}</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{card?.title}</p>
            <p className="text-3xl text-[rgb(19,17,18)]">{card?.value}</p>
        </div>
    );
}

export default AnalyticsCard;
