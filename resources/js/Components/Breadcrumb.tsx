// Breadcrumb.tsx
import React from "react";
import { Link } from "@inertiajs/react";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

const formatBreadcrumbLabel = (segment: string): string => {
    return segment
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

const customBreadcrumbs: { [key: string]: string } = {
    profile: "User Profile",
    edit: "Edit Profile",
    // Add more custom labels as needed
};

const generateBreadcrumbs = (path: string) => {
    const pathSegments = path.split("/").filter(Boolean);
    const breadcrumbs = [{ href: "/", label: "Home" }]; // Default home breadcrumb

    // Skip 'admin' or 'tutor' segments
    const filteredSegments = pathSegments.filter(segment => !['admin', 'tutor'].includes(segment));

    filteredSegments.forEach((segment, index) => {
        const href = "/" + filteredSegments.slice(0, index + 1).join("/");
        const label = customBreadcrumbs[segment] || formatBreadcrumbLabel(segment);
        breadcrumbs.push({ href, label });
    });

    return breadcrumbs;
};

interface BreadcrumbProps {
    path: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
    const breadcrumbs = generateBreadcrumbs(path);

    return (
        <nav aria-label="breadcrumb">
            <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                    <BreadcrumbItem key={index}>
                        {index !== breadcrumbs.length - 1 ? (
                            <BreadcrumbLink href={breadcrumb.href}>
                                {breadcrumb.label}
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                        )}
                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </nav>
    );
};

export default Breadcrumb;