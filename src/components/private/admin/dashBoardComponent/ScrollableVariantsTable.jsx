export default function ScrollableVariantsTable({
  variants,
  updateVariant,
  deleteVariant,
}) {
  return (
    <div className=" overflow-hidden">
      {/* SCROLL CONTAINER */}
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full overflow-x-auto align-middle">

          <table className=" text-sm">
            
            {/* HEADER */}
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-2 text-left">SKU</th>
                <th className="px-4 py-2 text-left">Color</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Stock</th>
                <th className="px-4 py-2 text-left">Extra 1</th>
                <th className="px-4 py-2 text-left">Extra 2</th>
                <th className="px-4 py-2 text-left">Extra 3</th>
                <th className="px-4 py-2 text-left">Extra 4</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {variants.map((v, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">

                  {/* SKU */}
                  <td className="px-4 py-2 whitespace-nowrap">
                    {v.sku}
                  </td>

                  {/* COLOR */}
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2 min-w-[200px]">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ background: v.colorCode }}
                      />
                      <input
                        value={v.color}
                        onChange={(e) =>
                          updateVariant(i, "color", e.target.value)
                        }
                        className="border px-2 py-1 w-[100px]"
                      />
                      <input
                        value={v.colorCode}
                        onChange={(e) =>
                          updateVariant(i, "colorCode", e.target.value)
                        }
                        className="border px-2 py-1 w-[80px]"
                      />
                    </div>
                  </td>

                  {/* SIZE */}
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={v.size}
                      onChange={(e) =>
                        updateVariant(i, "size", Number(e.target.value))
                      }
                      className="border px-2 py-1 w-[70px]"
                    />
                  </td>

                  {/* PRICE */}
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={v.price}
                      onChange={(e) =>
                        updateVariant(i, "price", Number(e.target.value))
                      }
                      className="border px-2 py-1 w-[90px]"
                    />
                  </td>

                  {/* STOCK */}
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={v.stock}
                      onChange={(e) =>
                        updateVariant(i, "stock", Number(e.target.value))
                      }
                      className="border px-2 py-1 w-[80px]"
                    />
                  </td>

                  {/* EXTRA COLUMNS (simulate your many columns) */}
                  {[...Array(4)].map((_, idx) => (
                    <td key={idx} className="px-4 py-2">
                      <input
                        type="number"
                        value={v.stock}
                        onChange={(e) =>
                          updateVariant(i, "stock", Number(e.target.value))
                        }
                        className="border px-2 py-1 w-[80px]"
                      />
                    </td>
                  ))}

                  {/* DELETE */}
                  <td className="px-4 py-2">
                    <button
                      onClick={() => deleteVariant(i)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}