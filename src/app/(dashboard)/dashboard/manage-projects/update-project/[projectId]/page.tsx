const UpdateProjectPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  console.log(blogId)

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      UpdateProjectPage
    </div>
  );
};

export default UpdateProjectPage;