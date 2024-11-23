var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.Use(async (context, next) => {
    Endpoint ep = context.GetEndpoint();
    if (ep != null) {
        await context.Response.WriteAsync(ep.DisplayName + " use replied\n");
        foreach (var md in ep.Metadata) {
            await context.Response.WriteAsync(md + "\n");
        }
    }  
    await next(context);
});
app.UseEndpoints(endpoints =>
{
    _ = endpoints.Map("Home1", async (context) =>
    {
        await context.Response.WriteAsync("Home1 link is called");
    });
    _ = endpoints.MapGet("Home1/Index", async (context) =>
    {
        await context.Response.WriteAsync("Index link is called");
    });
    _ = endpoints.Map("Home1/list", async (context) =>
    {
        await context.Response.WriteAsync("Index link is called");
    });
});

app.Run(async (HttpContext context) =>
{
    await context.Response.WriteAsync("Link error.");
});

app.Run(async (HttpContext context) =>
{
    await context.Response.WriteAsync("Link error.");
});
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
