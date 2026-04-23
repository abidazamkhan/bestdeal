import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Techori. - Admin",
    description: "Techori. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
