IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20241101023801_initial'
)
BEGIN
    CREATE TABLE [Departments] (
        [Id] int NOT NULL,
        [DeptName] nchar(30) NULL,
        CONSTRAINT [PK__Departme__3214EC07ABE1D7C3] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20241101023801_initial'
)
BEGIN
    CREATE TABLE [Students] (
        [Id] int NOT NULL,
        [FirstName] nchar(30) NULL,
        [LastName] nchar(30) NULL,
        [DepartmentId] int NULL,
        [Grade] int NULL,
        CONSTRAINT [PK__Students__3214EC07FD5D26D9] PRIMARY KEY ([Id]),
        CONSTRAINT [FK__Students__Depart__3E52440B] FOREIGN KEY ([DepartmentId]) REFERENCES [Departments] ([Id])
    );
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20241101023801_initial'
)
BEGIN
    CREATE INDEX [IX_Students_DepartmentId] ON [Students] ([DepartmentId]);
END;
GO

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20241101023801_initial'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20241101023801_initial', N'8.0.10');
END;
GO

COMMIT;
GO

