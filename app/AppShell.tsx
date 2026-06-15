'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  currentUserName?: string;
  currentUserRole?: string;
  isAdmin: boolean;
  isMagang: boolean;
  isLoggedIn: boolean;
  children: React.ReactNode;
}

export default function AppShell({ currentUserName, currentUserRole, isAdmin, isMagang, isLoggedIn, children }: Props) {
  const pathname = usePathname();
  const isLanding = pathname === '/';

  return (
    <>
      {!isLanding && (
        <header className="topbar">
          <Link className="brand" href="/">
            <span className="brandMark">FS</span>
            <span>
              <strong>FS Comp Core</strong>
              <small>Unit, QC, PSI, Label QR</small>
            </span>
          </Link>
          <nav>
            {isLoggedIn ? (
              <>
                <Link href="/">Dashboard</Link>
                {!isMagang ? <Link href="/batch-psi">Batch PSI</Link> : null}
                <Link href="/qc-harian">QC Harian</Link>
                <Link href="/qc-tools">QC Tools</Link>
                <Link href="/katalog">Katalog</Link>
                <Link href="/label">Label QR</Link>
                <Link href="/attendance">Absensi</Link>
                {isAdmin ? <Link href="/sales">Penjualan</Link> : null}
                {isAdmin ? <Link href="/finance">Keuangan</Link> : null}
                {isAdmin ? <Link href="/users">User</Link> : null}
              </>
            ) : null}
            <Link href="/login">{isLoggedIn ? `${currentUserName} (${currentUserRole})` : 'Login'}</Link>
          </nav>
        </header>
      )}
      <main>{children}</main>
      {!isLanding && (
        <footer className="siteFooter">
          <span>Dibuat oleh</span>
          <strong>Faza Abdani Auni Robbi S.T</strong>
        </footer>
      )}
    </>
  );
}
